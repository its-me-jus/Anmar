import { QuestionSet } from '../index';
import type { Question } from '../../../types';

export const cantoneseQuestions: QuestionSet = {
  language: 'Cantonese',
  questions: [
    {
      id: 1,
      text: "什麼是工作場所性騷擾？",
      options: [
        "不受歡迎的性行為，使人感到被冒犯、羞辱或受威脅",
        "關於外表的普通恭維",
        "同事之間的專業對話"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "性騷擾是任何不受歡迎的性行為，可能使人感到被冒犯、羞辱或受威脅。",
      feedback: {
        correct: "正確！了解性騷擾的定義是識別它的第一步。",
        incorrect: "性騷擾是不受歡迎的性質行為，使人感到被冒犯、羞辱或受威脅。"
      }
    },
    {
      id: 2,
      text: "在工作場所，什麼是交換式騷擾(Quid Pro Quo)？",
      options: [
        "當工作福利以性服務為條件時",
        "同事之間的任務交換",
        "幫助同事完成工作"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "交換式騷擾發生在工作福利如晉升或正面評價取決於接受性要求時。",
      feedback: {
        correct: "正確！交換式騷擾涉及濫用權力以獲取性好處。",
        incorrect: "交換式騷擾發生在工作決定與性或浪漫服務掛鉤時。"
      }
    },
    {
      id: 3,
      text: "什麼會造成敵意工作環境？",
      options: [
        "普遍的性行為使工作場所不舒適或羞辱",
        "關於工作項目的專業分歧",
        "高績效標準"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "敵意工作環境產生於存在普遍行為造成冒犯、恐嚇或敵對氛圍時。",
      feedback: {
        correct: "正確！敵意工作環境來自持續不當行為的模式。",
        incorrect: "敵意工作環境產生於存在普遍行為使工作因其冒犯性質而變得困難時。"
      }
    },
    {
      id: 4,
      text: "如果某人只是開玩笑地作出性暗示的評論，這是否仍可被視為騷擾？",
      options: [
        "是，影響比意圖更重要",
        "不，只有意圖才重要",
        "僅當直接針對該人時"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "hard",
      explanation: "在性騷擾中，對接收者的影響比發送者的意圖更重要。即使是無害的玩笑也可能造成敵意環境。",
      feedback: {
        correct: "正確！對接收者的影響才是重要的，而非發送者的意圖。",
        incorrect: "性騷擾由其對他人的影響決定，即使意圖只是開玩笑。"
      }
    },
    {
      id: 5,
      text: "在工作場所適當的身體界限是什麼？",
      options: [
        "尊重個人空間並在任何身體接觸前徵求許可",
        "偶爾觸碰總是可接受的",
        "所有形式的身體接觸都不允許"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "easy",
      explanation: "尊重身體界限意味著尊重他人的個人空間並在任何身體接觸前徵求許可。",
      feedback: {
        correct: "正確！尊重個人空間和徵求許可是適當身體界限的關鍵。",
        incorrect: "適當的身體界限需要尊重他人的個人空間並在觸碰前徵求他們的同意。"
      }
    },
    {
      id: 6,
      text: "視覺性騷擾如何在工作場所發生？",
      options: [
        "在工作場所展示或通過電子郵件分享性質的圖像或材料",
        "穿著正式工作服裝",
        "在你的辦公桌上放家人照片"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "視覺騷擾包括在工作環境中展示或分享性質材料，包括圖像、動畫或電子郵件。",
      feedback: {
        correct: "正確！展示性質材料可能造成敵意工作環境。",
        incorrect: "視覺騷擾包括在共享空間或通過專業通訊渠道展示性質材料。"
      }
    },
    {
      id: 7,
      text: "如果有人拒絕了你在工作場所的浪漫追求，適當的反應是什麼？",
      options: [
        "尊重他們的決定並保持專業關係",
        "繼續嘗試說服他們",
        "在工作中完全避開他們"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "easy",
      explanation: "尊重他人的拒絕並繼續保持專業關係是被拒絕浪漫追求後的適當行為。",
      feedback: {
        correct: "正確！尊重他人拒絕的決定是專業和適當的行為。",
        incorrect: "對浪漫追求被拒絕的適當回應是尊重他們的決定並保持專業關係。"
      }
    },
    {
      id: 8,
      text: "在工作場所關係中，什麼是同意？",
      options: [
        "明確、持續、自願的同意，可以隨時撤回",
        "一次同意適用於所有未來互動",
        "沒有明確拒絕"
      ],
      correctAnswer: 0,
      category: "respect",
      difficulty: "medium",
      explanation: "真正的同意必須是明確、自願、持續的，並且可以隨時撤回。",
      feedback: {
        correct: "正確！同意必須是明確、持續、自願的，並且可以撤回。",
        incorrect: "真正的同意不是假設或永久的，而必須是明確、持續和自願的。"
      }
    },
    {
      id: 9,
      text: "權力動態如何影響工作場所的同意？",
      options: [
        "員工可能因擔心後果而不自由地拒絕來自管理者的請求",
        "權力動態對同意沒有影響",
        "員工總是拒絕來自管理者的請求"
      ],
      correctAnswer: 0,
      category: "respect",
      difficulty: "hard",
      explanation: "權力動態可能削弱給予真正同意的能力，因為處於下級位置的人可能感到壓力要同意有權勢者的請求。",
      feedback: {
        correct: "正確！認識到權力不平衡可能影響同意自由是重要的。",
        incorrect: "權力動態可能使員工因擔心後果而難以拒絕來自主管的請求。"
      }
    },
    {
      id: 10,
      text: "什麼是工作環境中的數碼騷擾？",
      options: [
        "通過工作相關的電子郵件或社交媒體發送性質信息或圖像",
        "使用電子郵件與同事溝通",
        "通過數碼平台分享工作文件"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "數碼騷擾包括使用電子郵件、短信或社交媒體等電子方式發送不受歡迎的性內容。",
      feedback: {
        correct: "正確！數碼騷擾通過電子方式發生，並有與其他形式騷擾相同的影響。",
        incorrect: "數碼騷擾發生在技術被用來發送不受歡迎的性內容時。"
      }
    },
    {
      id: 11,
      text: "如果你目睹工作場所性騷擾，你應該做什麼？",
      options: [
        "如果安全的話進行干預，並按照公司政策報告事件",
        "忽略情況因為它與你無關",
        "侵略性地confrontation騷擾者"
      ],
      correctAnswer: 0,
      category: "policy",
      difficulty: "medium",
      explanation: "旁觀者在通過安全干預和報告事件來防止騷擾方面扮演重要角色。",
      feedback: {
        correct: "正確！旁觀者干預和報告是防止和解決騷擾的關鍵。",
        incorrect: "旁觀者有責任以安全方式干預並按照公司政策報告騷擾。"
      }
    },
    {
      id: 12,
      text: "工作場所性騷擾的潛在後果是什麼？",
      options: [
        "對受害者的心理影響、生產力下降和公司的法律責任",
        "如果每個人只是在開玩笑，就沒有後果",
        "只有在存在身體接觸時才有法律後果"
      ],
      correctAnswer: 0,
      category: "policy",
      difficulty: "medium",
      explanation: "性騷擾有廣泛的後果，包括對受害者的心理傷害、工作環境的干擾和潛在的法律責任。",
      feedback: {
        correct: "正確！性騷擾對個人和組織都有負面影響。",
        incorrect: "性騷擾有嚴重後果，包括對受害者的心理傷害和對公司的法律和財務風險。"
      }
    },
    {
      id: 13,
      text: "為什麼許多性騷擾受害者不報告事件？",
      options: [
        "擔心報復、羞恥或相信不會採取行動",
        "因為騷擾不是嚴重問題",
        "因為他們總是更喜歡自己解決問題"
      ],
      correctAnswer: 0,
      category: "policy",
      difficulty: "hard",
      explanation: "有許多報告障礙，包括擔心不被相信、報復或報告對其職業生涯的影響。",
      feedback: {
        correct: "正確！了解這些障礙可以幫助組織改進報告流程。",
        incorrect: "騷擾受害者可能不報告是因為真實擔憂，如擔心報復或不被認真對待。"
      }
    },
    {
      id: 14,
      text: "經理收到性騷擾投訴時的最佳實踐是什麼？",
      options: [
        "認真對待投訴、仔細記錄並遵循適當程序",
        "要求員工直接與被指控者解決問題",
        "等待看問題是否會自行解決"
      ],
      correctAnswer: 0,
      category: "policy",
      difficulty: "hard",
      explanation: "經理有責任認真對待騷擾投訴並遵循公司適當政策進行調查和回應。",
      feedback: {
        correct: "正確！經理必須認真對待所有投訴並遵循適當程序。",
        incorrect: "當經理收到投訴時，他們必須認真對待並遵循既定公司流程。"
      }
    },
    {
      id: 15,
      text: "組織如何有效防止性騷擾？",
      options: [
        "建立明確政策、提供定期培訓、一致執行規則並促進尊重文化",
        "僅依靠書面政策",
        "僅在事件發生時處理"
      ],
      correctAnswer: 0,
      category: "policy",
      difficulty: "medium",
      explanation: "防止騷擾的全面方法需要強有力的政策、培訓、一致執行和對尊重文化的承諾領導。",
      feedback: {
        correct: "正確！有效預防需要多方面的方法和強大的組織支持。",
        incorrect: "有效防止騷擾需要的不僅僅是政策，而是需要全面方法來創建尊重的工作環境。"
      }
    },
    {
      id: 16,
      text: "誰對防止性騷擾和培養尊重的工作場所文化負有主要責任？",
      options: [
        "僅人力資源部門",
        "僅高級管理層",
        "所有人，包括管理層、人力資源和所有員工"
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "easy",
      explanation: "創建無騷擾的工作場所是每個人的責任，儘管管理層有額外的義務。",
      feedback: {
        correct: "正確！組織中的每個人都有責任維護尊重的工作場所。",
        incorrect: "防止騷擾和培養尊重是一個共同責任，包括組織中的每個人。"
      }
    },
    {
      id: 17,
      text: "如果某人最初同意與同事的浪漫關係但後來撤回同意，這種撤回必須被尊重嗎？",
      options: [
        "不，一旦給予同意就不能撤回",
        "是，同意必須是持續的並且可以隨時撤回。撤回後繼續追求可能構成騷擾",
        "只有當關係已正式向人力資源部門申報時"
      ],
      correctAnswer: 1,
      category: "respect",
      difficulty: "medium",
      explanation: "同意必須是持續的並且可以隨時撤回。撤回後繼續追求可能構成騷擾。",
      feedback: {
        correct: "正確！同意可以隨時撤回，撤回後繼續追求可能是騷擾。",
        incorrect: "同意不是永久的 - 它可以隨時撤回，撤回後繼續追求可能構成騷擾。"
      }
    },
    {
      id: 18,
      text: "以下哪項通常不被視為性騷擾？",
      options: [
        "對某人的性別認同或性取向發表冒犯性評論",
        "以專業方式對工作表現提供建設性反饋",
        "以性暗示的方式盯著或看著某人"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "關於工作表現的專業反饋，當以適當方式提供時，不是騷擾。",
      feedback: {
        correct: "正確！當以適當方式提供時，專業的工作相關反饋不是騷擾。",
        incorrect: "關於工作表現的專業反饋是工作場所的正常部分，當以適當方式提供時不是騷擾。"
      }
    },
    {
      id: 19,
      text: "當員工報告性騷擾時，他們通常應該期望公司做什麼？",
      options: [
        "未經調查立即解僱被指控的人",
        "被告知安靜地自行處理",
        "迅速、保密（盡可能）和公正的調查，以及免受報復的保護"
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "medium",
      explanation: "公司應以迅速、保密的調查回應騷擾報告，並保護報告者免受報復。",
      feedback: {
        correct: "正確！員工在報告騷擾時應期望公平調查和免受報復的保護。",
        incorrect: "公司應以全面調查回應騷擾報告，並保護報告者免受報復。"
      }
    },
    {
      id: 20,
      text: "單一嚴重事件（如性侵犯）是否足以構成性騷擾？",
      options: [
        "不，騷擾總是需要重複事件",
        "是，單一嚴重事件絕對可以被視為性騷擾，並可能是非法的",
        "只有在事件有目擊者的情況下"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "單一事件，如果足夠嚴重，可以構成性騷擾 - 不一定總是需要多次事件。",
      feedback: {
        correct: "正確！單一嚴重事件絕對可以構成性騷擾。",
        incorrect: "性騷擾不需要多次事件 - 單一嚴重事件可能已足夠。"
      }
    }
  ],
  metadata: {
    totalQuestions: 20,
    categories: ["harassment", "respect", "policy"],
    difficulties: {
      easy: 4,
      medium: 11,
      hard: 5
    }
  }
}; 