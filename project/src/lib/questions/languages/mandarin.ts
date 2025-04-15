import { QuestionSet } from '../index';
import type { Question } from '../../../types';

export const mandarinQuestions: QuestionSet = {
  language: 'Mandarin',
  questions: [
    {
      id: 1,
      text: "什么是工作场所性骚扰？",
      options: [
        "任何违反尊严或创造恐吓、敌对、有辱人格、羞辱或冒犯环境的不受欢迎的性行为。",
        "仅限于性质的身体接触。",
        "同事之间的友好赞美。"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "性骚扰包括任何创造恐吓、敌对、有辱人格、羞辱或冒犯环境的不受欢迎的性行为。",
      feedback: {
        correct: '正确！了解什么构成性骚扰对于维持安全工作场所至关重要。',
        incorrect: '性骚扰包括任何创造恐吓或敌对环境的不受欢迎的性行为。'
      }
    },
    {
      id: 2,
      text: "以下哪项是\"交换条件\"性骚扰的例子？",
      options: [
        "管理者提供晋升以换取性好处。",
        "同事经常讲让人不舒服的下流笑话。",
        "在办公室展示带有不当图像的日历。"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "交换条件骚扰发生在工作福利取决于性好处时。",
      feedback: {
        correct: '正确！这是交换条件骚扰的典型例子，工作福利与性好处挂钩。',
        incorrect: '交换条件骚扰特指将就业福利与性好处挂钩。'
      }
    },
    {
      id: 3,
      text: "什么构成了由性骚扰引起的\"敌意工作环境\"？",
      options: [
        "单一的、轻微的冒犯性评论。",
        "严重或普遍存在的性行为，不合理地干扰个人工作表现或创造恐吓环境。",
        "与主管就工作任务有分歧。"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "hard",
      explanation: "敌意工作环境涉及创造恐吓、冒犯性氛围的严重或普遍行为。",
      feedback: {
        correct: '正确！敌意工作环境需要足够严重或普遍的行为来创造恐吓环境。',
        incorrect: '敌意工作环境的特点是创造恐吓氛围的严重或普遍行为。'
      }
    },
    {
      id: 4,
      text: "反复邀请同事约会，尽管他们每次都拒绝，这被视为潜在的性骚扰吗？",
      options: [
        "不，这只是表现出坚持。",
        "是的，反复的不受欢迎的追求可能构成骚扰。",
        "仅当邀请者是管理者时。"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "持续不受欢迎的浪漫或性追求可能构成骚扰，无论意图如何。",
      feedback: {
        correct: '正确！在被拒绝后继续浪漫追求是不受欢迎的行为，可能构成骚扰。',
        incorrect: '拒绝后的浪漫追求坚持是不适当的，可能构成骚扰。'
      }
    },
    {
      id: 5,
      text: "以下哪些行为是身体性骚扰的一种形式？",
      options: [
        "工作中朋友之间的合意拥抱。",
        "不受欢迎的触摸、擦碰或阻挡他人的路径。",
        "介绍时的坚实握手。"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "身体性骚扰包括任何不受欢迎的具有性性质的身体接触。",
      feedback: {
        correct: '正确！不受欢迎的身体接触或故意身体干扰构成身体性骚扰。',
        incorrect: '身体性骚扰涉及不受欢迎的触摸或对他人的故意身体干扰。'
      }
    },
    {
      id: 6,
      text: "展示性明确海报或发送带有暗示性内容的电子邮件会助长性骚扰吗？",
      options: [
        "是的，这可以被视为视觉骚扰并有助于形成敌意工作环境。",
        "不，只要不针对特定个人。",
        "仅当图像非法时。"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "带有性内容的视觉材料可能创造敌意工作环境并构成骚扰。",
      feedback: {
        correct: '正确！带有性内容的视觉材料可以创造敌意环境，即使不针对特定个人。',
        incorrect: '性视觉内容可以创造敌意环境，无论它是否针对特定个人。'
      }
    },
    {
      id: 7,
      text: "如果有人说他们的行为只是'开玩笑'，这仍然可能被视为性骚扰吗？",
      options: [
        "不，如果意图是幽默，那不是骚扰。",
        "是的，行为对接收者的影响是关键，无论意图如何。",
        "只有当笑话是由管理者讲的时。"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "意图不决定骚扰 - 影响和合理人如何看待它才是重要的。",
      feedback: {
        correct: '正确！行为的影响，而不是意图，决定了其是否构成骚扰。',
        incorrect: '即使有人声称某事只是"玩笑"，对接收者的影响在决定骚扰时才是重要的。'
      }
    },
    {
      id: 8,
      text: "如果同事的性质评论或笑话让你不舒服，你应该怎么做？",
      options: [
        "一起笑以避免显得难相处。",
        "忽略它，希望它自行停止。",
        "明确表示该行为不受欢迎，如果继续，考虑根据公司政策报告。"
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "easy",
      explanation: "最佳方法是明确沟通边界并在行为继续时遵循报告程序。",
      feedback: {
        correct: '正确！明确表达行为不受欢迎并在必要时报告是适当的步骤。',
        incorrect: '当评论或笑话让你不舒服时，最好明确表示它们不受欢迎，如果继续则报告。'
      }
    },
    {
      id: 9,
      text: "如果你目睹你认为可能是针对同事的性骚扰行为，什么是负责任的行动？",
      options: [
        "在公共场合积极地面对骚扰者。",
        "忽略它，因为这不是你的事。",
        "向被针对的同事提供支持和/或根据公司程序报告事件，如果适当的话。"
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "medium",
      explanation: "旁观者通过支持目标和报告事件在防止骚扰中扮演重要角色。",
      feedback: {
        correct: '正确！支持同事并通过适当渠道报告有助于创造更安全的工作场所。',
        incorrect: '作为潜在骚扰的见证者，支持目标并通过适当渠道报告是负责任的方法。'
      }
    },
    {
      id: 10,
      text: "员工通常可以在哪里找到公司关于性骚扰的具体政策和报告程序？",
      options: [
        "这通常是不成文的常识。",
        "在员工手册、公司内部网或人力资源部门。",
        "只有主管可以访问此信息。"
      ],
      correctAnswer: 1,
      category: "policy",
      difficulty: "easy",
      explanation: "公司通常在员工手册和公司内部网上记录骚扰政策。",
      feedback: {
        correct: '正确！政策和程序通常记录在员工资源中并可从人力资源获取。',
        incorrect: '骚扰政策通常记录在员工手册、公司内部网或可从人力资源获取。'
      }
    },
    {
      id: 11,
      text: "在报告性骚扰的背景下，什么是报复？",
      options: [
        "感谢某人提出问题。",
        "对因报告骚扰或参与调查而采取的不利行动（如降职、解雇、排斥）。",
        "进行公平和公正的调查。"
      ],
      correctAnswer: 1,
      category: "policy",
      difficulty: "hard",
      explanation: "报复涉及对因报告骚扰或参与调查的人采取负面行动。",
      feedback: {
        correct: '正确！报复是对因报告骚扰或参与调查的人采取的任何不利行动。',
        incorrect: '报复指对因报告骚扰或参与调查的人采取的负面行动。'
      }
    },
    {
      id: 12,
      text: "性骚扰可以通过电子邮件、工作聊天平台或社交媒体等数字方式发生吗？",
      options: [
        "不，骚扰只发生在面对面情况下。",
        "是的，通过电子方式的不受欢迎的性行为也是骚扰。",
        "只有使用公司设备时。"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "性骚扰可以通过任何媒介发生，包括数字和电子通信。",
      feedback: {
        correct: '正确！骚扰可以通过任何形式的通信发生，包括数字平台。',
        incorrect: '性骚扰可以通过任何通信媒介发生，包括电子邮件和聊天等数字平台。'
      }
    },
    {
      id: 13,
      text: "在工作场所，同事之间的身体接触（如拥抱或触摸肩膀）需要同意吗？",
      options: [
        "不，友好的手势总是可以接受的。",
        "是的，不应假定同意，必须尊重个人边界。",
        "同意只需要用于明确的浪漫或性接触。"
      ],
      correctAnswer: 1,
      category: "respect",
      difficulty: "medium",
      explanation: "不应假定任何身体接触的同意，必须尊重个人边界。",
      feedback: {
        correct: '正确！永远不应假定身体接触的同意，必须尊重每个人的个人边界。',
        incorrect: '即使是看似友好的身体接触，也不应假定同意，必须尊重个人边界。'
      }
    },
    {
      id: 14,
      text: "权力动态（例如，管理者和下属）如何影响涉及潜在性骚扰的情况？",
      options: [
        "权力动态在定义骚扰时没有区别。",
        "处于下属地位的人可能因担心报复而感到不太能够拒绝进展或报告不受欢迎的行为。",
        "只有管理者才能是骚扰者。"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "hard",
      explanation: "权力不平衡可能使下属因担心后果而难以拒绝进展或报告骚扰。",
      feedback: {
        correct: '正确！权力不平衡可以创造下属感到无法拒绝或报告骚扰的情况。',
        incorrect: '权力动态很重要，因为下属如果拒绝进展或报告骚扰可能担心报复。'
      }
    },
    {
      id: 15,
      text: "如果员工被第三方（如客户或顾客）性骚扰，公司是否可能要负责任？",
      options: [
        "不，公司只对其员工的行为负责。",
        "是的，如果公司知道或应该知道骚扰但未能采取适当的纠正措施。",
        "只有当骚扰发生在公司财产上时。"
      ],
      correctAnswer: 1,
      category: "policy",
      difficulty: "hard",
      explanation: "如果公司知道或应该知道并且未能采取行动，公司可能对第三方骚扰负责。",
      feedback: {
        correct: '正确！公司有责任保护员工免受骚扰，即使是来自第三方的，一旦他们意识到。',
        incorrect: '如果公司知道骚扰但未能采取适当行动，他们可能对第三方骚扰负责。'
      }
    },
    {
      id: 16,
      text: "谁负有防止性骚扰和培养尊重工作场所文化的主要责任？",
      options: [
        "只有人力资源部门。",
        "只有高级管理层。",
        "所有人，包括管理层、人力资源和所有员工。"
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "easy",
      explanation: "创造无骚扰工作场所是每个人的责任，尽管管理层有额外的义务。",
      feedback: {
        correct: '正确！组织中的每个人都有责任维持尊重的工作场所。',
        incorrect: '防止骚扰和培养尊重是包括组织中每个人的共同责任。'
      }
    },
    {
      id: 17,
      text: "如果某人最初同意与同事的浪漫关系但后来撤回同意，必须尊重这种撤回吗？",
      options: [
        "不，一旦给予同意就不能撤回。",
        "是的，同意必须是持续的，可以随时撤回。撤回后继续追求可能是骚扰。",
        "只有当关系正式向人力资源部门宣布时。"
      ],
      correctAnswer: 1,
      category: "respect",
      difficulty: "medium",
      explanation: "同意必须是持续的，可以随时撤回。撤回后继续追求可能构成骚扰。",
      feedback: {
        correct: '正确！同意可以随时撤回，撤回后继续追求可能是骚扰。',
        incorrect: '同意不是永久的 - 可以随时撤回，撤回后继续追求可能构成骚扰。'
      }
    },
    {
      id: 18,
      text: "以下哪项通常不被视为性骚扰？",
      options: [
        "对某人的性别认同或性取向发表冒犯性评论。",
        "以专业方式提供有关工作表现的建设性反馈。",
        "以性暗示方式凝视某人。"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "当以适当方式提供时，关于工作表现的专业反馈不是骚扰。",
      feedback: {
        correct: '正确！与工作相关的专业反馈在适当提供时不是骚扰。',
        incorrect: '关于工作表现的专业反馈是工作场所的正常部分，当适当提供时不是骚扰。'
      }
    },
    {
      id: 19,
      text: "当员工报告性骚扰时，他们通常应该期望公司做什么？",
      options: [
        "不经调查立即解雇被指控的人。",
        "被告知自己默默处理。",
        "迅速、保密（尽可能）和公正的调查，以及防止报复的保护。"
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "medium",
      explanation: "公司应该以迅速、保密的调查回应骚扰报告，并保护报告者免受报复。",
      feedback: {
        correct: '正确！员工在报告骚扰时应该期望公平调查和防止报复的保护。',
        incorrect: '公司应该以彻底调查回应骚扰报告，并保护报告者免受报复。'
      }
    },
    {
      id: 20,
      text: "单一严重事件（如性侵犯）足以构成性骚扰吗？",
      options: [
        "不，骚扰总是需要重复事件。",
        "是的，单一严重事件绝对可以被视为性骚扰，并可能是非法的。",
        "只有当事件有目击者时。"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "如果足够严重，单一事件可以构成性骚扰 - 并不总是需要多次事件。",
      feedback: {
        correct: '正确！单一严重事件绝对可以构成性骚扰。',
        incorrect: '性骚扰不需要多次事件 - 单一严重事件可能已足够。'
      }
    }
  ],
  metadata: {
    totalQuestions: 20,
    categories: ["harassment", "respect", "policy"],
    difficulties: {
      easy: 3,
      medium: 13,
      hard: 4
    }
  }
}; 