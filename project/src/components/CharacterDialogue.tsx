import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';
import { useDialogueStore } from '../store/dialogueStore';
import { testStory } from '../lib/stories/story';
import AudioManager from '../utils/audio';
import type { DialogueNode, DialogueOption, Achievement } from '../types/dialogue';
import type { Store } from '../store';
import { AchievementDisplay } from './AchievementDisplay';

const audioManager = AudioManager.getInstance();

export const CharacterDialogue: React.FC = () => {
  const setQuizState = useStore((state: Store) => state.setQuizState);
  const {
    currentNodeId,
    visitedNodes,
    points,
    achievements,
    setCurrentNode: setCurrentNodeId,
    addPoints,
    unlockAchievement,
    updateAchievementProgress,
    setFlag,
    updateRelationship
  } = useDialogueStore();

  const [currentNode, setCurrentNode] = useState<DialogueNode | null>(null);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // Load the story when component mounts
    useDialogueStore.getState().loadStory(testStory);
  }, []);

  useEffect(() => {
    if (currentNodeId) {
      const node = testStory.nodes.find(n => n.id === currentNodeId);
      setCurrentNode(node || null);
      if (node) {
        setIsTyping(true);
        setDisplayedText('');
        setShowOptions(false);
        typeText(node.text);
      }
    }
  }, [currentNodeId]);

  const typeText = async (text: string) => {
    setDisplayedText('');
    for (let i = 0; i < text.length; i++) {
      setDisplayedText(prev => prev + text[i]);
      await new Promise(resolve => setTimeout(resolve, 30));
    }
    setIsTyping(false);
    setShowOptions(true);
  };

  const handleOptionSelect = async (option: DialogueOption) => {
    setShowOptions(false);
    
    // Apply effects
    if (option.points) {
      addPoints(option.points);
    }
    
    // Update relationships based on choice
    if (currentNode) {
      const character = testStory.characters.find(
        c => c.id === currentNode.characterId
      );
      if (character) {
        updateRelationship(character.id, 5);
      }
    }

    // Check for achievements
    achievements.forEach((achievement: Achievement) => {
      if (!achievement.unlocked && points >= 100) {
        unlockAchievement(achievement.id);
        updateAchievementProgress(achievement.id, 100);
      }
    });

    // Move to next node
    if (option.nextNodeId) {
      setCurrentNodeId(option.nextNodeId);
    } else {
      // End of dialogue
      setQuizState('LESSONS');
    }
  };

  const getCurrentCharacter = () => {
    if (!currentNode) return null;
    return testStory.characters.find(
      c => c.id === currentNode.characterId
    );
  };

  if (!currentNode) return null;

  const character = getCurrentCharacter();
  if (!character) return null;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <AchievementDisplay achievements={achievements} />
        
        <div className="w-full max-w-4xl bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
          {/* Character Header */}
          <div className="flex items-center space-x-6 mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative w-24 h-24"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-50" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src={character.avatar}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-white mb-2"
              >
                {character.name}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-300 text-lg"
              >
                {character.role}
              </motion.p>
            </div>
          </div>

          {/* Dialogue Box */}
          <div className="bg-black/50 rounded-xl p-6 mb-8 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.p
                key={displayedText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl text-white leading-relaxed"
              >
                {displayedText}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Options */}
          {showOptions && currentNode.options && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {currentNode.options.map((option) => (
                <motion.button
                  key={option.id}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect(option)}
                  className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl p-4 text-left transition-all duration-200 border border-white/10"
                >
                  {option.text}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between items-center text-gray-300 mb-2">
              <div className="text-lg">Points: <span className="text-blue-400 font-bold">{points}</span></div>
              <div className="text-lg">Progress: <span className="text-blue-400 font-bold">{Math.round((visitedNodes.length / testStory.nodes.length) * 100)}%</span></div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(visitedNodes.length / testStory.nodes.length) * 100}%` }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 