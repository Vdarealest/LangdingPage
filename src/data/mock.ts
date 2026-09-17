import type {
  NavLink,
  Highlight,
  MenuCategory,
  MenuItem,
  Stat,
  Testimonial,
  GalleryImage,
  OpeningHour,
  ContactInfo,
  FooterLinkGroup,
  SocialLink,
} from "@/types";

export const brand = {
  name: "Hạt Nâu",
  tagline: "Cà phê rang mộc mỗi sáng",
};

export const navLinks: NavLink[] = [
  { label: "Câu chuyện", href: "#story" },
  { label: "Thực đơn", href: "#menu" },
  { label: "Không gian", href: "#gallery" },
  { label: "Cảm nhận", href: "#testimonials" },
  { label: "Ghé quán", href: "#visit" },
];

export const heroBadge = "Rang mới mỗi sáng tại xưởng Cầu Đất";

export const marqueeItems: string[] = [
  "Rang mới mỗi sáng",
  "Arabica Cầu Đất",
  "Giao trong 30 phút",
  "Mở cửa 07:00 – 22:00",
  "Bánh nướng tại chỗ",
  "Mua hạt mang về",
];

export const heroImage = {
  src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop",
  alt: "Ba người chạm ly cà phê latte art trên bàn gỗ",
};

export const highlights: Highlight[] = [
  {
    id: "highlight-roast",
    title: "Rang tại chỗ mỗi ngày",
    description:
      "Mẻ hạt được rang vào 6 giờ sáng và chỉ phục vụ trong vòng 7 ngày, để giữ trọn hương thơm lúc vừa bung nhất.",
    icon: "bean",
  },
  {
    id: "highlight-origin",
    title: "Hạt Arabica Cầu Đất",
    description:
      "Chúng tôi thu mua trực tiếp từ ba nông hộ ở Cầu Đất, trả giá cao hơn thị trường để người trồng yên tâm làm sạch.",
    icon: "leaf",
  },
  {
    id: "highlight-space",
    title: "Không gian để thở",
    description:
      "Bàn rộng, ổ cắm ở mọi chỗ ngồi và nhạc mở vừa đủ nghe — nơi bạn có thể ngồi làm việc cả buổi mà không bị giục.",
    icon: "wifi",
  },
  {
    id: "highlight-delivery",
    title: "Giao trong 30 phút",
    description:
      "Đặt qua điện thoại hoặc fanpage, cà phê được giao tận nơi trong bán kính 5km mà vẫn còn nguyên độ lạnh.",
    icon: "truck",
  },
];

export const menuCategories: MenuCategory[] = [
  { id: "ca-phe", label: "Cà phê" },
  { id: "do-uong", label: "Đồ uống khác" },
  { id: "banh", label: "Bánh ngọt" },
];

export const menuItems: MenuItem[] = [
  {
    id: "menu-ca-phe-sua-da",
    name: "Cà phê sữa đá",
    description:
      "Robusta rang đậm pha phin, thêm sữa đặc và đá viên — vị quen thuộc của buổi sáng Sài Gòn.",
    price: 35000,
    imageUrl:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    category: "ca-phe",
    popular: true,
  },
  {
    id: "menu-bac-xiu",
    name: "Bạc xỉu",
    description:
      "Nhiều sữa, ít cà phê, béo nhẹ và dịu — dành cho những ai mới bắt đầu làm quen với cà phê Việt.",
    price: 39000,
    imageUrl:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop",
    category: "ca-phe",
  },
  {
    id: "menu-cold-brew",
    name: "Cold brew ủ lạnh 18 giờ",
    description:
      "Ủ chậm bằng nước lạnh suốt 18 giờ, hậu vị ngọt thanh của mía và cam vàng, gần như không chua gắt.",
    price: 55000,
    imageUrl:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=800&auto=format&fit=crop",
    category: "ca-phe",
    popular: true,
  },
  {
    id: "menu-cappuccino",
    name: "Cappuccino",
    description:
      "Một shot espresso Arabica cùng lớp bọt sữa mịn dày, rắc chút bột quế theo yêu cầu.",
    price: 49000,
    imageUrl:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
    category: "ca-phe",
  },
  {
    id: "menu-tra-dao",
    name: "Trà đào cam sả",
    description:
      "Trà đen ủ nóng cùng đào ngâm, cam tươi và sả đập dập, uống lạnh rất hợp buổi chiều oi.",
    price: 45000,
    imageUrl:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    category: "do-uong",
  },
  {
    id: "menu-matcha",
    name: "Matcha sữa dừa",
    description:
      "Matcha Uji đánh tay cùng sữa dừa, ngọt nhẹ và thơm béo, không bị gắt vị bột.",
    price: 52000,
    imageUrl:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop",
    category: "do-uong",
  },
  {
    id: "menu-croissant",
    name: "Croissant bơ Pháp",
    description:
      "Ủ bột qua đêm, cán 27 lớp bơ Pháp, nướng lại mỗi 2 tiếng nên lúc nào cũng còn giòn.",
    price: 42000,
    imageUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    category: "banh",
    popular: true,
  },
  {
    id: "menu-tiramisu",
    name: "Tiramisu cà phê",
    description:
      "Bánh mềm thấm espresso của chính quán, phủ cacao nguyên chất, ngọt vừa phải.",
    price: 58000,
    imageUrl:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop",
    category: "banh",
  },
  {
    id: "menu-banh-mi-nuong",
    name: "Bánh mì nướng mật ong",
    description:
      "Bánh mì dày nướng bơ, rưới mật ong cùng chuối và việt quất tươi — món no bụng cho buổi sáng.",
    price: 65000,
    imageUrl:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=800&auto=format&fit=crop",
    category: "banh",
  },
];

export const storyImage = {
  src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
  alt: "Không gian quán với cây xanh, ghế mây và quầy pha chế",
};

export const storyParagraphs: string[] = [
  "Hạt Nâu bắt đầu năm 2018 từ một chiếc máy rang 3kg đặt trong gara nhà, khi chúng tôi nhận ra mình không tìm nổi một ly cà phê sạch đúng nghĩa trong bán kính đi bộ.",
  "Bảy năm sau, chúng tôi vẫn rang thủ công từng mẻ nhỏ và vẫn ghi ngày rang lên từng túi hạt. Điều duy nhất thay đổi là số người cùng ngồi lại với chúng tôi mỗi sáng.",
];

export const stats: Stat[] = [
  { id: "stat-years", value: "7", label: "Năm rang thủ công" },
  { id: "stat-cups", value: "420", label: "Ly phục vụ mỗi ngày" },
  { id: "stat-farms", value: "3", label: "Nông hộ hợp tác trực tiếp" },
  { id: "stat-regulars", value: "1.800+", label: "Khách quen của quán" },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    alt: "Không gian quán với bảng hiệu CAFE và đèn thả trần",
  },
  {
    id: "gallery-2",
    src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    alt: "Barista rót sữa tạo hình lá trên tách cà phê",
  },
  {
    id: "gallery-3",
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
    alt: "Khu vực quầy pha chế và bàn gỗ dài trong quán",
  },
  {
    id: "gallery-4",
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop",
    alt: "Hạt cà phê rang sẫm màu nhìn cận cảnh",
  },
  {
    id: "gallery-5",
    src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    alt: "Ly đồ uống bạc hà chanh mát lạnh của quán",
  },
  
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Mình ngồi làm việc ở đây gần như mỗi sáng thứ Bảy. Nhân viên nhớ luôn món quen và chưa lần nào giục mình đứng dậy dù ngồi tới trưa.",
    name: "Ngọc Anh Trần",
    role: "Khách quen từ 2021",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "Cold brew ở đây là loại hiếm hoi mình uống được mà không cần thêm đường. Mua hạt về nhà pha cũng ra đúng vị đó.",
    name: "Minh Khoa Lê",
    role: "Dân văn phòng gần quán",
    avatarUrl: "https://i.pravatar.cc/150?img=51",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "Đặt 40 phần cho buổi họp công ty, giao đúng giờ và còn kèm giấy ghi tên từng người. Chi tiết nhỏ nhưng rất được lòng.",
    name: "Hải Yến Phạm",
    role: "Quản lý hành chính",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
    rating: 4,
  },
];

export const openingHours: OpeningHour[] = [
  { days: "Thứ Hai – Thứ Sáu", time: "07:00 – 22:00" },
  { days: "Thứ Bảy – Chủ Nhật", time: "07:30 – 23:00" },
  { days: "Ngày lễ", time: "08:00 – 21:00" },
];

export const contactInfo: ContactInfo = {
  address: "128 Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh",
  phone: "0909 123 456",
  email: "xinchao@hatnau.vn",
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Khám phá",
    links: [
      { label: "Thực đơn", href: "#menu" },
      { label: "Câu chuyện", href: "#story" },
      { label: "Không gian", href: "#gallery" },
      { label: "Ghé quán", href: "#visit" },
    ],
  },
  {
    title: "Dịch vụ",
    links: [
      { label: "Đặt bàn", href: "#visit" },
      { label: "Giao hàng tận nơi", href: "#" },
      { label: "Đặt tiệc công ty", href: "#" },
      { label: "Bán hạt rang", href: "#" },
    ],
  },
  {
    title: "Về chúng tôi",
    links: [
      { label: "Tuyển dụng", href: "#" },
      { label: "Hợp tác nông hộ", href: "#" },
      { label: "Lớp học pha chế", href: "#" },
      { label: "Liên hệ", href: "#visit" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "TikTok", href: "#", icon: "tiktok" },
  { label: "YouTube", href: "#", icon: "youtube" },
];
