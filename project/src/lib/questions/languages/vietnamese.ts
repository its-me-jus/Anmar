import { QuestionSet } from '../index';
import type { Question } from '../../../types';

export const vietnameseQuestions: QuestionSet = {
  language: 'Vietnamese',
  questions: [
    {
      id: 1,
      text: "Quấy rối tình dục tại nơi làm việc là gì?",
      options: [
        "Hành vi tình dục không mong muốn khiến người khác cảm thấy bị xúc phạm, bị làm nhục hoặc bị đe dọa",
        "Những lời khen thông thường về ngoại hình",
        "Các cuộc trò chuyện chuyên nghiệp giữa đồng nghiệp"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "Quấy rối tình dục là bất kỳ hành vi tình dục không mong muốn nào có thể khiến người khác cảm thấy bị xúc phạm, bị làm nhục hoặc bị đe dọa.",
      feedback: {
        correct: "Đúng! Hiểu định nghĩa về quấy rối tình dục là bước đầu tiên để nhận biết nó.",
        incorrect: "Quấy rối tình dục là hành vi có tính chất tình dục không mong muốn khiến người khác cảm thấy bị xúc phạm, bị làm nhục hoặc bị đe dọa."
      }
    },
    {
      id: 2,
      text: "Tại nơi làm việc, quấy rối quid pro quo là gì?",
      options: [
        "Khi các lợi ích công việc phụ thuộc vào việc đổi lấy dịch vụ tình dục",
        "Trao đổi nhiệm vụ giữa các đồng nghiệp",
        "Giúp đỡ đồng nghiệp với công việc"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "Quấy rối quid pro quo xảy ra khi các lợi ích công việc như thăng chức hoặc đánh giá tích cực phụ thuộc vào việc chấp nhận những đề nghị tình dục.",
      feedback: {
        correct: "Đúng! Quấy rối quid pro quo liên quan đến việc lạm dụng quyền lực để đổi lấy các ưu đãi tình dục.",
        incorrect: "Quấy rối quid pro quo xảy ra khi các quyết định công việc được gắn với các dịch vụ tình dục hoặc lãng mạn."
      }
    },
    {
      id: 3,
      text: "Điều gì tạo ra môi trường làm việc thù địch?",
      options: [
        "Hành vi mang tính tình dục lan rộng khiến nơi làm việc trở nên khó chịu hoặc nhục nhã",
        "Bất đồng chuyên môn về các dự án công việc",
        "Có tiêu chuẩn hiệu suất cao"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "Môi trường làm việc thù địch phát sinh khi có hành vi lan rộng tạo ra bầu không khí xúc phạm, đáng sợ hoặc thù địch.",
      feedback: {
        correct: "Đúng! Môi trường làm việc thù địch phát sinh từ một mô hình hành vi không phù hợp liên tục.",
        incorrect: "Môi trường làm việc thù địch được tạo ra khi có hành vi lan rộng khiến công việc trở nên khó khăn do tính chất xúc phạm của nó."
      }
    },
    {
      id: 4,
      text: "Nếu ai đó chỉ có ý định đùa giỡn với một bình luận mang tính tình dục, liệu đó có thể được coi là quấy rối không?",
      options: [
        "Có, tác động quan trọng hơn ý định",
        "Không, chỉ có ý định là quan trọng",
        "Chỉ khi nó được nhắm trực tiếp đến người đó"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "hard",
      explanation: "Trong quấy rối tình dục, tác động đến người nhận quan trọng hơn ý định của người gửi. Ngay cả những trò đùa được định ý vô hại cũng có thể tạo ra môi trường thù địch.",
      feedback: {
        correct: "Đúng! Tác động đến người nhận mới là điều quan trọng, không phải ý định của người gửi.",
        incorrect: "Quấy rối tình dục được xác định bởi tác động của nó đối với người khác, ngay cả khi ý định chỉ là đùa giỡn."
      }
    },
    {
      id: 5,
      text: "Ranh giới thể chất phù hợp tại nơi làm việc là gì?",
      options: [
        "Tôn trọng không gian cá nhân và xin phép trước khi có bất kỳ tiếp xúc thể chất nào",
        "Việc chạm vào ngẫu nhiên luôn được chấp nhận",
        "Tất cả các hình thức tiếp xúc thể chất đều không được phép"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "easy",
      explanation: "Tôn trọng ranh giới thể chất có nghĩa là tôn trọng không gian cá nhân của người khác và xin phép trước khi có bất kỳ tiếp xúc thể chất nào.",
      feedback: {
        correct: "Đúng! Tôn trọng không gian cá nhân và xin phép là chìa khóa cho ranh giới thể chất phù hợp.",
        incorrect: "Ranh giới thể chất phù hợp đòi hỏi phải tôn trọng không gian cá nhân của người khác và xin sự đồng ý của họ trước khi chạm vào."
      }
    },
    {
      id: 6,
      text: "Quấy rối tình dục bằng hình ảnh có thể xảy ra như thế nào tại nơi làm việc?",
      options: [
        "Hiển thị hoặc chia sẻ hình ảnh hoặc tài liệu có tính chất tình dục tại nơi làm việc hoặc qua email",
        "Mặc trang phục công sở chính thức",
        "Đặt ảnh gia đình trên bàn làm việc của bạn"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "Quấy rối bằng hình ảnh bao gồm việc hiển thị hoặc chia sẻ tài liệu có tính chất tình dục trong môi trường làm việc, bao gồm hình ảnh, hoạt hình hoặc email.",
      feedback: {
        correct: "Đúng! Hiển thị tài liệu có tính chất tình dục có thể tạo ra môi trường làm việc thù địch.",
        incorrect: "Quấy rối bằng hình ảnh bao gồm việc hiển thị tài liệu có tính chất tình dục trong không gian chung hoặc qua các phương tiện giao tiếp chuyên nghiệp."
      }
    },
    {
      id: 7,
      text: "Phản ứng thích hợp là gì nếu ai đó từ chối những đề nghị lãng mạn của bạn tại nơi làm việc?",
      options: [
        "Tôn trọng quyết định của họ và duy trì mối quan hệ chuyên nghiệp",
        "Tiếp tục cố gắng thuyết phục họ",
        "Hoàn toàn tránh họ tại nơi làm việc"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "easy",
      explanation: "Tôn trọng sự từ chối của người khác và duy trì mối quan hệ chuyên nghiệp là hành vi thích hợp sau khi bị từ chối những đề nghị lãng mạn.",
      feedback: {
        correct: "Đúng! Tôn trọng quyết định từ chối của người khác là hành vi chuyên nghiệp và phù hợp.",
        incorrect: "Phản ứng thích hợp đối với việc từ chối những đề nghị lãng mạn là tôn trọng quyết định của họ và duy trì mối quan hệ chuyên nghiệp."
      }
    },
    {
      id: 8,
      text: "Sự đồng ý là gì trong bối cảnh các mối quan hệ tại nơi làm việc?",
      options: [
        "Sự đồng ý rõ ràng, liên tục và tự nguyện có thể rút lại bất cứ lúc nào",
        "Đồng ý một lần áp dụng cho tất cả các tương tác trong tương lai",
        "Không có sự từ chối rõ ràng"
      ],
      correctAnswer: 0,
      category: "respect",
      difficulty: "medium",
      explanation: "Sự đồng ý thực sự phải rõ ràng, tự nguyện, liên tục và có thể được rút lại bất cứ lúc nào.",
      feedback: {
        correct: "Đúng! Sự đồng ý phải rõ ràng, liên tục, tự nguyện và có thể rút lại.",
        incorrect: "Sự đồng ý thực sự không phải là điều được giả định hoặc vĩnh viễn, mà phải rõ ràng, liên tục và tự nguyện."
      }
    },
    {
      id: 9,
      text: "Động lực quyền lực có thể ảnh hưởng đến sự đồng ý tại nơi làm việc như thế nào?",
      options: [
        "Nhân viên có thể không cảm thấy tự do từ chối yêu cầu từ người quản lý vì sợ hậu quả",
        "Động lực quyền lực không có ảnh hưởng đến sự đồng ý",
        "Nhân viên luôn từ chối yêu cầu từ người quản lý"
      ],
      correctAnswer: 0,
      category: "respect",
      difficulty: "hard",
      explanation: "Động lực quyền lực có thể làm suy yếu khả năng đưa ra sự đồng ý thực sự, vì những người ở vị trí thấp hơn có thể cảm thấy áp lực phải đồng ý với yêu cầu từ những người có quyền lực.",
      feedback: {
        correct: "Đúng! Điều quan trọng là phải thừa nhận rằng sự mất cân bằng quyền lực có thể ảnh hưởng đến tự do đồng ý.",
        incorrect: "Động lực quyền lực có thể khiến nhân viên khó từ chối yêu cầu từ cấp trên vì sợ hậu quả."
      }
    },
    {
      id: 10,
      text: "Quấy rối kỹ thuật số trong bối cảnh công việc là gì?",
      options: [
        "Gửi tin nhắn hoặc hình ảnh có tính chất tình dục qua email hoặc mạng xã hội liên quan đến công việc",
        "Sử dụng email để giao tiếp với đồng nghiệp",
        "Chia sẻ tài liệu công việc qua các nền tảng kỹ thuật số"
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "Quấy rối kỹ thuật số bao gồm việc sử dụng các phương tiện điện tử như email, tin nhắn văn bản hoặc mạng xã hội để gửi nội dung tình dục không mong muốn.",
      feedback: {
        correct: "Đúng! Quấy rối kỹ thuật số xảy ra qua các phương tiện điện tử và có tác động tương tự như các hình thức quấy rối khác.",
        incorrect: "Quấy rối kỹ thuật số xảy ra khi công nghệ được sử dụng để gửi nội dung tình dục không mong muốn."
      }
    },
    {
      id: 11,
      text: "Bạn nên làm gì nếu chứng kiến quấy rối tình dục tại nơi làm việc?",
      options: [
        "Can thiệp nếu an toàn và báo cáo sự cố theo chính sách của công ty",
        "Bỏ qua tình huống vì nó không liên quan đến bạn",
        "Đối đầu với người quấy rối một cách hung hăng"
      ],
      correctAnswer: 0,
      category: "policy",
      difficulty: "medium",
      explanation: "Nhân chứng có vai trò quan trọng trong việc ngăn chặn quấy rối bằng cách can thiệp an toàn và báo cáo sự cố.",
      feedback: {
        correct: "Đúng! Sự can thiệp và báo cáo của nhân chứng là chìa khóa để ngăn chặn và giải quyết quấy rối.",
        incorrect: "Nhân chứng có trách nhiệm can thiệp một cách an toàn và báo cáo quấy rối theo chính sách của công ty."
      }
    },
    {
      id: 12,
      text: "Những hậu quả tiềm ẩn của quấy rối tình dục tại nơi làm việc là gì?",
      options: [
        "Tác động tâm lý đến nạn nhân, giảm năng suất và trách nhiệm pháp lý cho công ty",
        "Không có hậu quả nếu mọi người chỉ đùa giỡn",
        "Chỉ có hậu quả pháp lý nếu có tiếp xúc thể chất"
      ],
      correctAnswer: 0,
      category: "policy",
      difficulty: "medium",
      explanation: "Quấy rối tình dục có hậu quả rộng lớn, bao gồm tổn hại tâm lý cho nạn nhân, gián đoạn môi trường làm việc và trách nhiệm pháp lý tiềm ẩn.",
      feedback: {
        correct: "Đúng! Quấy rối tình dục có tác động tiêu cực đến cả cá nhân và tổ chức.",
        incorrect: "Quấy rối tình dục có hậu quả nghiêm trọng bao gồm tổn hại tâm lý cho nạn nhân và rủi ro pháp lý và tài chính cho công ty."
      }
    },
    {
      id: 13,
      text: "Tại sao nhiều nạn nhân quấy rối tình dục không báo cáo sự cố?",
      options: [
        "Sợ trả thù, xấu hổ hoặc tin rằng sẽ không có hành động nào được thực hiện",
        "Vì quấy rối không phải là vấn đề nghiêm trọng",
        "Vì họ luôn thích tự giải quyết vấn đề"
      ],
      correctAnswer: 0,
      category: "policy",
      difficulty: "hard",
      explanation: "Có nhiều rào cản đối với việc báo cáo, bao gồm sợ không được tin, sợ bị trả thù hoặc ảnh hưởng của việc báo cáo đến sự nghiệp của họ.",
      feedback: {
        correct: "Đúng! Hiểu những rào cản này có thể giúp tổ chức cải thiện quy trình báo cáo.",
        incorrect: "Nạn nhân của quấy rối có thể không báo cáo vì những lo ngại thực sự như sợ bị trả thù hoặc không được coi trọng."
      }
    },
    {
      id: 14,
      text: "Thực hành tốt nhất cho người quản lý khi nhận được khiếu nại về quấy rối tình dục là gì?",
      options: [
        "Nghiêm túc đối xử với khiếu nại, ghi chép cẩn thận và tuân theo quy trình thích hợp",
        "Yêu cầu nhân viên giải quyết vấn đề trực tiếp với người bị cáo buộc",
        "Chờ xem liệu vấn đề có tự giải quyết không"
      ],
      correctAnswer: 0,
      category: "policy",
      difficulty: "hard",
      explanation: "Người quản lý có trách nhiệm nghiêm túc đối xử với khiếu nại về quấy rối và tuân theo chính sách công ty thích hợp để điều tra và phản hồi.",
      feedback: {
        correct: "Đúng! Người quản lý phải nghiêm túc đối xử với tất cả các khiếu nại và tuân theo quy trình thích hợp.",
        incorrect: "Khi người quản lý nhận được khiếu nại, họ phải nghiêm túc đối xử và tuân theo quy trình công ty đã thiết lập."
      }
    },
    {
      id: 15,
      text: "Làm thế nào tổ chức có thể ngăn chặn quấy rối tình dục một cách hiệu quả?",
      options: [
        "Thiết lập chính sách rõ ràng, cung cấp đào tạo thường xuyên, thực thi quy tắc nhất quán và thúc đẩy văn hóa tôn trọng",
        "Chỉ dựa vào chính sách bằng văn bản",
        "Chỉ giải quyết sự cố khi chúng xảy ra"
      ],
      correctAnswer: 0,
      category: "policy",
      difficulty: "medium",
      explanation: "Cách tiếp cận toàn diện để ngăn chặn quấy rối đòi hỏi chính sách mạnh mẽ, đào tạo, thực thi nhất quán và lãnh đạo cam kết với văn hóa tôn trọng.",
      feedback: {
        correct: "Đúng! Phòng ngừa hiệu quả đòi hỏi cách tiếp cận đa chiều và hỗ trợ tổ chức mạnh mẽ.",
        incorrect: "Ngăn chặn quấy rối một cách hiệu quả đòi hỏi nhiều hơn chỉ là chính sách, mà cần cách tiếp cận toàn diện để tạo ra môi trường làm việc tôn trọng."
      }
    },
    {
      id: 16,
      text: "Ai chịu trách nhiệm chính trong việc ngăn chặn quấy rối tình dục và nuôi dưỡng văn hóa tôn trọng tại nơi làm việc?",
      options: [
        "Chỉ phòng Nhân sự",
        "Chỉ ban quản lý cấp cao",
        "Tất cả mọi người, bao gồm ban quản lý, HR, và tất cả nhân viên"
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "easy",
      explanation: "Tạo ra nơi làm việc không có quấy rối là trách nhiệm của tất cả mọi người, mặc dù ban quản lý có nghĩa vụ bổ sung.",
      feedback: {
        correct: "Đúng! Mọi người trong tổ chức đều chia sẻ trách nhiệm duy trì nơi làm việc tôn trọng.",
        incorrect: "Ngăn chặn quấy rối và nuôi dưỡng sự tôn trọng là trách nhiệm chung bao gồm tất cả mọi người trong tổ chức."
      }
    },
    {
      id: 17,
      text: "Nếu ai đó ban đầu đồng ý với mối quan hệ lãng mạn với đồng nghiệp nhưng sau đó rút lại sự đồng ý, liệu việc rút lại đó có phải được tôn trọng?",
      options: [
        "Không, sự đồng ý không thể rút lại một khi đã được đưa ra",
        "Có, sự đồng ý phải liên tục và có thể rút lại bất cứ lúc nào. Tiếp tục theo đuổi sau khi rút lại có thể là quấy rối",
        "Chỉ khi mối quan hệ đã được khai báo chính thức với HR"
      ],
      correctAnswer: 1,
      category: "respect",
      difficulty: "medium",
      explanation: "Sự đồng ý phải liên tục và có thể rút lại bất cứ lúc nào. Tiếp tục theo đuổi sau khi rút lại có thể cấu thành quấy rối.",
      feedback: {
        correct: "Đúng! Sự đồng ý có thể rút lại bất cứ lúc nào, và tiếp tục theo đuổi sau khi rút lại có thể là quấy rối.",
        incorrect: "Sự đồng ý không phải là vĩnh viễn - nó có thể rút lại bất cứ lúc nào, và tiếp tục theo đuổi sau khi rút lại có thể cấu thành quấy rối."
      }
    },
    {
      id: 18,
      text: "Điều nào sau đây thường KHÔNG được coi là quấy rối tình dục?",
      options: [
        "Đưa ra bình luận xúc phạm về bản dạng giới hoặc xu hướng tính dục của ai đó",
        "Cung cấp phản hồi mang tính xây dựng về hiệu suất công việc một cách chuyên nghiệp",
        "Nhìn chằm chằm hoặc liếc nhìn ai đó theo cách gợi ý tình dục"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "Phản hồi chuyên nghiệp về hiệu suất công việc, khi được đưa ra một cách phù hợp, không phải là quấy rối.",
      feedback: {
        correct: "Đúng! Phản hồi chuyên nghiệp, liên quan đến công việc không phải là quấy rối khi được đưa ra một cách phù hợp.",
        incorrect: "Phản hồi chuyên nghiệp về hiệu suất công việc là một phần bình thường của nơi làm việc và không phải là quấy rối khi được đưa ra một cách phù hợp."
      }
    },
    {
      id: 19,
      text: "Khi nhân viên báo cáo quấy rối tình dục, họ thường nên mong đợi điều gì từ công ty?",
      options: [
        "Sa thải ngay lập tức người bị buộc tội mà không điều tra",
        "Được bảo phải tự xử lý một cách kín đáo",
        "Điều tra nhanh chóng, bảo mật (trong phạm vi có thể), công bằng, và bảo vệ khỏi sự trả đũa"
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "medium",
      explanation: "Công ty nên phản hồi báo cáo quấy rối với điều tra nhanh chóng, bảo mật và bảo vệ người báo cáo khỏi sự trả đũa.",
      feedback: {
        correct: "Đúng! Nhân viên nên mong đợi một cuộc điều tra công bằng và bảo vệ khỏi sự trả đũa khi báo cáo quấy rối.",
        incorrect: "Công ty nên phản hồi báo cáo quấy rối với điều tra kỹ lưỡng và bảo vệ người báo cáo khỏi sự trả đũa."
      }
    },
    {
      id: 20,
      text: "Liệu một sự cố nghiêm trọng đơn lẻ (như tấn công tình dục) có đủ để cấu thành quấy rối tình dục không?",
      options: [
        "Không, quấy rối luôn đòi hỏi sự cố lặp đi lặp lại",
        "Có, một sự cố nghiêm trọng đơn lẻ chắc chắn có thể được coi là quấy rối tình dục và có thể là bất hợp pháp",
        "Chỉ khi có nhân chứng cho sự cố"
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "Một sự cố đơn lẻ, nếu đủ nghiêm trọng, có thể cấu thành quấy rối tình dục - không phải lúc nào cũng cần nhiều sự cố.",
      feedback: {
        correct: "Đúng! Một sự cố nghiêm trọng đơn lẻ chắc chắn có thể cấu thành quấy rối tình dục.",
        incorrect: "Quấy rối tình dục không đòi hỏi nhiều sự cố - một sự cố nghiêm trọng đơn lẻ có thể là đủ."
      }
    }
  ],
  metadata: {
    totalQuestions: 20,
    categories: ["harassment", "respect", "policy"],
    difficulties: {
      easy: 5,
      medium: 10,
      hard: 5
    }
  }
}; 