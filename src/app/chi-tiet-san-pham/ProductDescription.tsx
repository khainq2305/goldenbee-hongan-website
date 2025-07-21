"use client";

import { useState } from "react";
import ShowMoreText from "react-show-more-text";

export default function ProductDescription() {
  const description = `
Sau một loạt vụ án mạng bí ẩn xảy ra gần đây, nhà báo Ippongi Toru của tòa soạn Nhật Báo nhận được một bức thư từ kẻ tự xưng là hung thủ – Vaccine. Trong thư, hắn mô tả quá trình giết người mà chỉ hung thủ mới có thể biết, tuyên bố nạn nhân là bất kỳ ai và yêu cầu thảo luận công khai với nhà báo này qua thư từ và báo giấy...

Khi cuộc đàm luận giữa họ bắt đầu, sự thật dần hé lộ. Trong quá trình trao đổi, Ippongi nhận thấy Vaccine không sở hữu “cái ác tuyệt đối”, dường như hắn có lý do “đúng đắn” để giết người. Vậy mục đích của kẻ sát nhân, người có niềm tin tuyệt đối vào khả năng của mình là gì? Trong quá trình điều tra và đưa tin, những bí ẩn dần được giải đáp nhưng liệu đó có phải là tất cả sự thật? Đây không chỉ là một câu chuyện về tội ác, mà còn là một tác phẩm nghệ thuật về số phận của một nhà báo hình sự.
`;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-white p-6 rounded-md space-y-5 text-sm text-gray-800 leading-relaxed relative">
      <h2 className="font-semibold text-base">Mô tả sản phẩm</h2>

      <div className="space-y-2">
        <p className="font-semibold">Vì Sao Không Thể Giết?</p>

        <p>
          <strong>Gửi Ippongi Toru:</strong>{" "}
          <em>“Hãy dùng ngôn từ của anh để ngăn tôi giết người đi.”</em>
        </p>
        <p>
          <strong>Gửi Vaccine:</strong>{" "}
          <em>
            “Tôi muốn cho anh biết giết người là tội ác không thể bao biện bằng
            bất kỳ lý do gì.”
          </em>
        </p>
      </div>

      <div className="relative">
        <ShowMoreText
          lines={6}
          more="Xem thêm"
          less="Thu gọn"
          onClick={(expanded) => setIsExpanded(expanded)}
          anchorClass="text-blue-600 hover:underline block text-center mt-2"
          expanded={false}
          truncatedEndingComponent="..."
        >
          {description}
        </ShowMoreText>

        {/* Fade layer chỉ hiện khi chưa expanded */}
        {!isExpanded && (
          <div className="absolute bottom-8 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none transition-all"></div>
        )}
      </div>
    </div>
  );
}
