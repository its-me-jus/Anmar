import React, { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react';
import * as THREE from 'three';

interface SolarSystemProps {
  scrollYProgress: any;
  onSolarElementClick?: () => void;
  activeElement?: any;
}

export interface SolarSystemRefHandle {
  highlightSegment: (color: string, intensity: number) => void;
}

interface Material extends THREE.Material {
  color?: THREE.Color;
  emissive?: THREE.Color;
}

export const SolarSystem = forwardRef<SolarSystemRefHandle, SolarSystemProps>(
  ({ scrollYProgress, onSolarElementClick = () => {}, activeElement = null }: SolarSystemProps, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const logoRef = useRef<THREE.Group | null>(null);
    const segmentsRef = useRef<THREE.Object3D[]>([]);
    const glowRef = useRef<THREE.Mesh | null>(null);
    const opacityRef = useRef(1);
    const materialsRef = useRef<Record<string, THREE.Material[]>>({
      blue: [],
      green: [],
      red: []
    });
    const [webGLError, setWebGLError] = useState<boolean>(false);

    // Expose methods to parent via ref
    useImperativeHandle(ref, () => ({
      highlightSegment: (color: string, intensity: number) => {
        // If no color provided, reset all segments to normal
        if (!color) {
          Object.values(materialsRef.current).forEach(materials => {
            materials.forEach(material => {
              if (material instanceof THREE.ShaderMaterial) {
                material.uniforms.intensity.value = 1;
              }
            });
          });
          return;
        }

        // Find all materials with the matching color and highlight them
        Object.entries(materialsRef.current).forEach(([key, materials]) => {
          const shouldHighlight = 
            (key === 'blue' && color === '#0066cc') ||
            (key === 'green' && color === '#7ac142') ||
            (key === 'red' && color === '#e30613');
          
          materials.forEach(material => {
            if (material instanceof THREE.ShaderMaterial) {
              material.uniforms.intensity.value = shouldHighlight ? intensity : 1;
            }
          });
        });
      }
    }));

    useEffect(() => {
      if (!containerRef.current) return;

      // Check for WebGL availability first
      try {
        // Try to create a test WebGL context
        const canvas = document.createElement('canvas');
        const hasWebGL = !!(window.WebGLRenderingContext && 
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
          
        if (!hasWebGL) {
          console.warn('WebGL is not available in this environment');
          setWebGLError(true);
          return; // Exit early if WebGL isn't available
        }
      } catch (error) {
        console.error('Error checking WebGL support:', error);
        setWebGLError(true);
        return; // Exit early if there's an error checking WebGL
      }

      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera setup - adjusted to be orthographic for better full-screen display
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
      camera.position.z = 2;
      cameraRef.current = camera;

      // Define handleResize here, outside the try block
      const handleResize = () => {
        if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
        
        // Update renderer size
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        
        // Update camera aspect ratio for proper scaling
        if (cameraRef.current instanceof THREE.OrthographicCamera) {
          const aspect = window.innerWidth / window.innerHeight;
          const frustumSize = 2;
          
          cameraRef.current.left = -aspect * frustumSize / 2;
          cameraRef.current.right = aspect * frustumSize / 2;
          cameraRef.current.top = frustumSize / 2;
          cameraRef.current.bottom = -frustumSize / 2;
          cameraRef.current.updateProjectionMatrix();
        }
      };

      // Renderer setup with improved sizing and error handling
      try {
        const renderer = new THREE.WebGLRenderer({ 
          antialias: true,
          alpha: true 
        });
        
        // Set renderer size and pixel ratio for sharper display
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Enhanced lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
        mainLight.position.set(0, 0, 5);
        scene.add(mainLight);

        // Create logo group
        const logoGroup = new THREE.Group();
        
        // Load the logo texture with proper settings
        const textureLoader = new THREE.TextureLoader();
        const logoTexture = textureLoader.load('/anmarsquare.png', (texture: THREE.Texture) => {
          texture.generateMipmaps = false;
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.format = THREE.RGBAFormat;
          texture.needsUpdate = true;
        });
        
        // Create a circular geometry for the logo
        const logoGeometry = new THREE.CircleGeometry(0.4, 32);
        
        // Create a custom shader material for the logo with optimized settings
        const logoMaterial = new THREE.ShaderMaterial({
          uniforms: {
            logoTexture: { value: logoTexture },
            time: { value: 0 },
            opacity: { value: 1.0 }
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform sampler2D logoTexture;
            uniform float time;
            uniform float opacity;
            varying vec2 vUv;
            
            void main() {
              vec2 center = vec2(0.5, 0.5);
              float dist = length(vUv - center);
              float mask = smoothstep(0.48, 0.42, dist);
              vec4 logoColor = texture2D(logoTexture, vUv);
              float bottomFactor = smoothstep(0.45, 0.0, vUv.y) * 0.1 + 0.9;
              gl_FragColor = vec4(logoColor.rgb, logoColor.a * mask * opacity * bottomFactor);
            }
          `,
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false
        });

        // Create the logo mesh with optimized rendering settings
        const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
        logoMesh.position.z = 0.1;
        logoMesh.frustumCulled = false;
        logoGroup.add(logoMesh);
        
        // Add the logo group to the scene
        scene.add(logoGroup);
        logoRef.current = logoGroup;

        // Create the three curved segments matching the logo
        const createSegment = (startAngle: number, endAngle: number, color: string, radius: number, thickness: number, segmentType: 'blue' | 'green' | 'red') => {
          const curve = new THREE.EllipseCurve(
            0, 0,            // Center x, y
            radius, radius,  // x radius, y radius
            startAngle, endAngle,  // Start angle, end angle
            false,           // Clockwise
            0                // Rotation
          );

          const points = curve.getPoints(50);
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          
          // Create a wider line for better visibility
          const material = new THREE.LineBasicMaterial({ 
            color,
            linewidth: 1, // Note: line thickness is limited in WebGL
            transparent: true,
            opacity: 0.9
          });

          // Create a mesh instead of line for thicker appearance
          const line = new THREE.Line(geometry, material);
          
          // Add a glow effect to each segment with intensity uniform
          const glowMaterial = new THREE.ShaderMaterial({
            uniforms: {
              color: { value: new THREE.Color(color) },
              time: { value: 0 },
              opacity: { value: 0.6 },
              intensity: { value: 1.0 },
            },
            vertexShader: `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform vec3 color;
              uniform float time;
              uniform float opacity;
              uniform float intensity;
              void main() {
                gl_FragColor = vec4(color * intensity, opacity * (0.5 + 0.5 * sin(time * 2.0)));
              }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
          });
          
          // Store material reference for highlighting
          if (!materialsRef.current[segmentType]) {
            materialsRef.current[segmentType] = [];
          }
          materialsRef.current[segmentType].push(glowMaterial);
          
          // Create tube geometry for thicker lines
          const tubeGeometry = new THREE.TubeGeometry(
            new THREE.CatmullRomCurve3(
              points.map((p: any) => new THREE.Vector3(p.x, p.y, 0))
            ),
            50,
            thickness,
            8,
            false
          );
          
          const tubeMesh = new THREE.Mesh(tubeGeometry, glowMaterial);
          
          const segmentGroup = new THREE.Group();
          segmentGroup.add(line);
          segmentGroup.add(tubeMesh);
          
          return segmentGroup;
        };

        // Create the three segments with proper angles and colors
        // Blue segment (top)
        const blueSegment = createSegment(Math.PI * 0.25, Math.PI * 0.75, '#0074C2', 0.4, 0.018, 'blue');
        // Green segment (left)
        const greenSegment = createSegment(Math.PI * 0.95, Math.PI * 1.45, '#74C045', 0.4, 0.018, 'green');
        // Red segment (right)
        const redSegment = createSegment(Math.PI * 1.65, Math.PI * 2.15, '#E61E27', 0.4, 0.018, 'red');

        logoGroup.add(blueSegment);
        logoGroup.add(greenSegment);
        logoGroup.add(redSegment);
        
        segmentsRef.current = [blueSegment, greenSegment, redSegment];
        
        // Add central glow effect
        const glowGeometry = new THREE.CircleGeometry(0.18, 32);
        const glowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color(0xffffff) },
            opacity: { value: 0.15 },
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            uniform vec3 color;
            uniform float opacity;
            varying vec2 vUv;
            void main() {
              float dist = length(vUv - vec2(0.5));
              float alpha = smoothstep(0.5, 0.2, dist) * opacity;
              gl_FragColor = vec4(color, alpha * (0.6 + 0.4 * sin(time * 1.5)));
            }
          `,
          transparent: true,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        });

        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.z = -0.01;
        logoGroup.add(glow);
        
        // Store a reference to the glow mesh
        glowRef.current = glow;

        // Optimize renderer settings
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          const time = Date.now() * 0.001;

          // Update opacity based on scroll progress
          const scrollProgress = scrollYProgress.get();
          let opacity = 1;
          
          // Enhanced fade-out on scroll
          if (scrollProgress > 0.1) {
            if (scrollProgress < 0.2) {
              const burstProgress = (scrollProgress - 0.1) * 10;
              opacity = 1 + Math.sin(burstProgress * Math.PI) * 0.3;
            } else if (scrollProgress < 0.4) {
              // Gradual fade between 20% and 40% scroll
              opacity = Math.max(0, 1 - ((scrollProgress - 0.2) / 0.2));
            } else {
              // Completely transparent after 40% scroll
              opacity = 0;
            }
          }

          opacityRef.current = opacity;

          // Update logo shader time
          if (logoRef.current) {
            logoRef.current.children.forEach((child: any) => {
              if (child instanceof THREE.Mesh && child.material instanceof THREE.ShaderMaterial) {
                child.material.uniforms.time.value = time;
              }
            });
          }

          // Apply animations to the logo
          if (logoRef.current) {
            // Gentle pulsing effect
            const pulseFactor = 1 + Math.sin(time * 0.8) * 0.05;
            logoRef.current.scale.set(pulseFactor, pulseFactor, pulseFactor);
            
            // Apply opacity to the entire logo group
            logoRef.current.traverse((child) => {
              if (child instanceof THREE.Mesh && child.material) {
                const material = child.material as THREE.Material;
                if (material.transparent) {
                  material.opacity = opacity * 0.9;
                }
              }
            });
          }
          
          // Animate individual segments with proper safeguards
          if (segmentsRef.current && segmentsRef.current.length > 0) {
            segmentsRef.current.forEach((segment: any, index: number) => {
              if (!segment) return;
              
              // Different rotation speeds for each segment
              const rotationSpeed = 0.08 + (index * 0.02);
              const direction = index % 2 === 0 ? 1 : -1;
              
              // Rotate segments in different directions and speeds
              segment.rotation.z = Math.sin(time * rotationSpeed * direction) * 0.05;
              
              // Pulse each segment with a different phase
              const pulseFactor = 1 + Math.sin(time * 1.0 + (index * Math.PI/1.5)) * 0.04;
              segment.scale.set(pulseFactor, pulseFactor, pulseFactor);
              
              // Update shader materials with proper checks
              if (segment.children && segment.children.length) {
                segment.children.forEach((child: any) => {
                  if (child instanceof THREE.Mesh && child.material) {
                    const material = child.material as THREE.ShaderMaterial;
                    if (material.uniforms && material.uniforms.time && material.uniforms.opacity) {
                      material.uniforms.time.value = time + (index * 0.5);
                      material.uniforms.opacity.value = opacity * 0.8;
                    }
                    
                    // Also set the basic opacity property if available
                    if (material.transparent) {
                      material.opacity = opacity;
                    }
                  } else if (child instanceof THREE.Line && child.material) {
                    // Handle Line materials
                    const material = child.material as THREE.LineBasicMaterial;
                    if (material.transparent) {
                      material.opacity = opacity;
                    }
                  }
                });
              }
            });
          }

          // Update central glow with safeguards
          if (glowRef.current) {
            const glowMaterial = glowRef.current.material as THREE.ShaderMaterial;
            if (glowMaterial && glowMaterial.uniforms && glowMaterial.uniforms.time && glowMaterial.uniforms.opacity) {
              glowMaterial.uniforms.time.value = time;
              glowMaterial.uniforms.opacity.value = opacity * 0.8;
            }
          }

          renderer.render(scene, camera);
        };

        animate();

        // Add window resize handler
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial sizing

      } catch (error) {
        console.error('Failed to initialize WebGL renderer:', error);
        setWebGLError(true);
        return; // Exit early on renderer creation failure
      }

      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        
        if (containerRef.current && rendererRef.current) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
        
        rendererRef.current?.dispose();
        
        // Dispose of materials and geometries
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach(material => material.dispose());
              } else {
                object.material.dispose();
              }
            }
          }
        });
      };
    }, []);

    // If WebGL isn't available, render a fallback message or image
    if (webGLError) {
      return (
        <div className="flex items-center justify-center h-full w-full bg-gray-900 rounded-lg">
          <div className="text-center p-4">
            <img 
              src="/anmarsquare.png" 
              alt="Anmar Logo" 
              className="w-32 h-32 mx-auto mb-4" 
            />
            <p className="text-white opacity-70">
              3D visualization not available in this environment
            </p>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={containerRef}
        className="w-full h-full absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {/* Container for Three.js canvas */}
      </div>
    );
  }
);