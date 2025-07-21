// components/LogoGrid.tsx

const logos = [
  "https://mms.img.susercontent.com/vn-11134216-7ra0g-m6b5qzm38wmua9",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWsoa7MAE3_RoPTjA4MDtBoKSpu2z_sAImw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjUo1yQaB0wakKGDeYqZ4g9QcFJVV99EmGg&s",
  "https://mcbooks.vn/wp-content/uploads/2025/03/mcbooks-logo.png",
  "https://mms.img.susercontent.com/412803de95ec58015397c45f96784102_tn",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceN7fOI6rv5M-aXmIdz2hIqL70qJRUW3L_Q&s",
  // có thể thêm bao nhiêu cũng được
];

const LogoGrid = () => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {logos.map((src, idx) => (
          <div key={idx} className="border rounded border-gray-200">
            <img src={src} alt={`Logo ${idx}`} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
