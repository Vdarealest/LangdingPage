import type { Locale, SiteCopy } from "@/types";

export type { Locale, SiteCopy } from "@/types";

const image = {
  hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop",
  story: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
  coffee: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
  bacXiu: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop",
  coldBrew: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=800&auto=format&fit=crop",
  cappuccino: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
  tea: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  matcha: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop",
  croissant: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
  tiramisu: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop",
  toast: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=800&auto=format&fit=crop",
  gallery1: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
  gallery2: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
  gallery3: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
  gallery4: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop",
  gallery5: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
};

const menuData = {
  coffee: { id: "menu-coffee", price: 35000, imageUrl: image.coffee, category: "ca-phe" as const, popular: true },
  bacXiu: { id: "menu-bac-xiu", price: 39000, imageUrl: image.bacXiu, category: "ca-phe" as const },
  coldBrew: { id: "menu-cold-brew", price: 55000, imageUrl: image.coldBrew, category: "ca-phe" as const, popular: true },
  cappuccino: { id: "menu-cappuccino", price: 49000, imageUrl: image.cappuccino, category: "ca-phe" as const },
  tea: { id: "menu-tea", price: 45000, imageUrl: image.tea, category: "do-uong" as const },
  matcha: { id: "menu-matcha", price: 52000, imageUrl: image.matcha, category: "do-uong" as const },
  croissant: { id: "menu-croissant", price: 42000, imageUrl: image.croissant, category: "banh" as const, popular: true },
  tiramisu: { id: "menu-tiramisu", price: 58000, imageUrl: image.tiramisu, category: "banh" as const },
  toast: { id: "menu-toast", price: 65000, imageUrl: image.toast, category: "banh" as const },
};

const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "TikTok", href: "#", icon: "tiktok" as const },
  { label: "YouTube", href: "#", icon: "youtube" as const },
];

const sharedNav = [
  { label: "Our story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "The space", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Visit us", href: "#visit" },
];

export const siteCopy = {
  en: {
    locale: "en",
    metadata: {
      title: "Hạt Nâu — Freshly roasted coffee, every morning",
      description: "A small coffee shop in District 3, Ho Chi Minh City, roasting Cầu Đất Arabica fresh every day.",
    },
    brand: { name: "Hạt Nâu", tagline: "Freshly roasted coffee, every morning" },
    navbar: {
      navigationLabel: "Main navigation",
      reserveLabel: "Reserve a table",
      openMenuLabel: "Open navigation menu",
      closeMenuLabel: "Close navigation menu",
      languageSwitcherLabel: "Language",
      switchToEnglishLabel: "Switch to English",
      switchToVietnameseLabel: "Chuyển sang tiếng Việt",
    },
    navLinks: sharedNav,
    hero: {
      badge: "Freshly roasted each morning in Cầu Đất",
      titleLines: ["Coffee roasted with care,", "served with soul"],
      description: "Every bean is roasted in-house and every cup is made by baristas who remember your name. A quiet corner in District 3 to start the day well.",
      menuCta: "Explore the menu",
      visitCta: "Plan a visit",
      openingTitle: "Open from 07:00",
      openingDescription: "The first roast is ready",
      image: { src: image.hero, alt: "Friends sharing latte art coffee around a wooden table" },
    },
    marqueeItems: ["Fresh roast every morning", "Cầu Đất Arabica", "Delivery within 30 minutes", "Open 07:00 – 22:00", "Baked in-house", "Take home a bag"],
    highlights: {
      eyebrow: "Why Hạt Nâu",
      title: "Four things we never compromise on",
      items: [
        { id: "highlight-roast", title: "Roasted fresh every day", description: "Every batch is roasted at 6 a.m. and served within seven days, while the aroma is still at its best.", icon: "bean" },
        { id: "highlight-origin", title: "Cầu Đất Arabica", description: "We buy directly from three Cầu Đất farms and pay above market rates so growers can farm with confidence.", icon: "leaf" },
        { id: "highlight-space", title: "Room to breathe", description: "Wide tables, a socket at every seat and just enough music for a full afternoon of focused work.", icon: "wifi" },
        { id: "highlight-delivery", title: "Delivered in 30 minutes", description: "Order by phone or fanpage and get coffee delivered within 5 km, still cold and fresh.", icon: "truck" },
      ],
    },
    story: {
      eyebrow: "Our story",
      title: "It started with a 3kg roaster in a garage",
      paragraphs: [
        "Hạt Nâu began in 2018 with a 3kg roaster at home, after we realized we could not find a genuinely clean cup of coffee within walking distance.",
        "Seven years later, we still roast in small batches and write the roast date on every bag. The only thing that changed is how many people now join us each morning.",
      ],
      quote: "We do not sell the best coffee in the city. We serve the cup we would happily drink every day.",
      author: "Duy Nguyen — founder",
      image: { src: image.story, alt: "Warm coffee shop interior with plants, rattan chairs and a bar" },
    },
    menu: {
      eyebrow: "The menu",
      title: "The cafe classics",
      description: "Prices include tax. Every drink can be adjusted for sweetness and ice to your liking.",
      allLabel: "Everything",
      popularLabel: "Popular",
      categories: [
        { id: "ca-phe", label: "Coffee" },
        { id: "do-uong", label: "Other drinks" },
        { id: "banh", label: "Pastries" },
      ],
      items: [
        { ...menuData.coffee, name: "Vietnamese iced coffee", description: "Dark-roasted phin coffee with condensed milk and ice — the familiar taste of a Saigon morning.", imageAlt: "Vietnamese iced coffee with condensed milk" },
        { ...menuData.bacXiu, name: "Bạc xỉu", description: "Plenty of milk, just a little coffee, smooth and gentle for anyone getting to know Vietnamese coffee.", imageAlt: "Glass of Vietnamese bạc xỉu coffee" },
        { ...menuData.coldBrew, name: "18-hour cold brew", description: "Slow-steeped in cold water for 18 hours, with a clean finish of sugar cane and golden orange.", imageAlt: "Glass of cold brew coffee with ice" },
        { ...menuData.cappuccino, name: "Cappuccino", description: "A shot of Arabica espresso with a thick, silky milk foam and a little cinnamon on request.", imageAlt: "Cappuccino with latte art" },
        { ...menuData.tea, name: "Peach, orange and lemongrass tea", description: "Hot black tea with peach, fresh orange and bruised lemongrass — perfect over ice on a warm afternoon.", imageAlt: "Iced peach tea with orange and lemongrass" },
        { ...menuData.matcha, name: "Coconut milk matcha", description: "Hand-whisked Uji matcha with coconut milk, lightly sweet and creamy without a bitter finish.", imageAlt: "Green matcha latte in a clear glass" },
        { ...menuData.croissant, name: "French butter croissant", description: "Overnight dough, 27 layers of French butter and a fresh bake every two hours for a crisp bite.", imageAlt: "Fresh golden butter croissant" },
        { ...menuData.tiramisu, name: "Coffee tiramisu", description: "Soft layers soaked in our espresso, topped with pure cocoa and just enough sweetness.", imageAlt: "Slice of coffee tiramisu with cocoa" },
        { ...menuData.toast, name: "Honey butter toast", description: "Thick buttered toast with honey, banana and fresh berries — a filling way to start the morning.", imageAlt: "Honey toast with banana and berries" },
      ],
    },
    stats: [
      { id: "stat-years", value: "7", label: "Years of craft roasting" },
      { id: "stat-cups", value: "420", label: "Cups served each day" },
      { id: "stat-farms", value: "3", label: "Direct partner farms" },
      { id: "stat-regulars", value: "1,800+", label: "Regular guests" },
    ],
    gallery: {
      eyebrow: "The space",
      title: "A morning at Hạt Nâu",
      images: [
        { id: "gallery-1", src: image.gallery1, alt: "Cafe interior with a CAFE sign and pendant lights" },
        { id: "gallery-2", src: image.gallery2, alt: "Barista pouring milk into latte art" },
        { id: "gallery-3", src: image.gallery3, alt: "Long wooden table beside the coffee bar" },
        { id: "gallery-4", src: image.gallery4, alt: "Freshly roasted coffee beans in close-up" },
        { id: "gallery-5", src: image.gallery5, alt: "Refreshing mint and lime drink" },
      ],
    },
    testimonials: {
      eyebrow: "Guest notes",
      title: "What regulars say about us",
      items: [
        { id: "testimonial-1", quote: "I work here almost every Saturday morning. The team remembers my order and has never once rushed me out, even when I stay until lunch.", name: "Ngoc Anh Tran", role: "Regular since 2021", avatarUrl: "https://i.pravatar.cc/150?img=32", rating: 5 },
        { id: "testimonial-2", quote: "This is one of the few places where I can drink cold brew without sugar. The beans I take home taste just as good in my own brewer.", name: "Minh Khoa Le", role: "Neighbourhood office worker", avatarUrl: "https://i.pravatar.cc/150?img=51", rating: 5 },
        { id: "testimonial-3", quote: "I ordered 40 cups for a company meeting. Everything arrived on time with handwritten name cards. Small detail, very thoughtful.", name: "Hai Yen Pham", role: "Office manager", avatarUrl: "https://i.pravatar.cc/150?img=47", rating: 4 },
      ],
    },
    visit: {
      eyebrow: "Come by",
      title: "We are waiting for you in District 3",
      description: "Drop in anytime, or call ahead if your group is larger than six so we can set the right table.",
      contact: { address: "128 Nguyen Dinh Chieu, District 3, Ho Chi Minh City", phone: "0909 123 456", email: "xinchao@hatnau.vn" },
      callToAction: "Call to reserve",
      hoursTitle: "Opening hours",
      hours: [
        { days: "Monday – Friday", time: "07:00 – 22:00" },
        { days: "Saturday – Sunday", time: "07:30 – 23:00" },
        { days: "Public holidays", time: "08:00 – 21:00" },
      ],
      hoursNote: "The kitchen stops taking orders 45 minutes before closing.",
    },
    footer: {
      description: "Small-batch roasting and a quiet table in District 3, Ho Chi Minh City.",
      groups: [
        { title: "Explore", links: [{ label: "Menu", href: "#menu" }, { label: "Our story", href: "#story" }, { label: "The space", href: "#gallery" }, { label: "Visit us", href: "#visit" }] },
        { title: "Services", links: [{ label: "Reserve a table", href: "#visit" }, { label: "Local delivery", href: "#" }, { label: "Corporate orders", href: "#" }, { label: "Buy roasted beans", href: "#" }] },
        { title: "About us", links: [{ label: "Careers", href: "#" }, { label: "Farm partnerships", href: "#" }, { label: "Brewing classes", href: "#" }, { label: "Contact", href: "#visit" }] },
      ],
      copyright: "All rights reserved.",
      socialLinks,
    },
  },
  vi: {
    locale: "vi",
    metadata: {
      title: "Hạt Nâu — Cà phê rang mộc mỗi sáng",
      description: "Quán cà phê nhỏ tại Quận 3, TP.HCM, rang mới Arabica Cầu Đất mỗi ngày.",
    },
    brand: { name: "Hạt Nâu", tagline: "Cà phê rang mộc mỗi sáng" },
    navbar: {
      navigationLabel: "Điều hướng chính",
      reserveLabel: "Đặt bàn",
      openMenuLabel: "Mở menu điều hướng",
      closeMenuLabel: "Đóng menu điều hướng",
      languageSwitcherLabel: "Ngôn ngữ",
      switchToEnglishLabel: "Switch to English",
      switchToVietnameseLabel: "Đang dùng tiếng Việt",
    },
    navLinks: [
      { label: "Câu chuyện", href: "#story" },
      { label: "Thực đơn", href: "#menu" },
      { label: "Không gian", href: "#gallery" },
      { label: "Cảm nhận", href: "#testimonials" },
      { label: "Ghé quán", href: "#visit" },
    ],
    hero: {
      badge: "Rang mới mỗi sáng tại xưởng Cầu Đất",
      titleLines: ["Cà phê rang mộc,", "pha bằng cả sự tử tế"],
      description: "Mỗi mẻ hạt được rang trong ngày, pha bởi những barista nhớ tên bạn. Một chỗ ngồi yên tĩnh giữa Quận 3 để bắt đầu buổi sáng cho tử tế.",
      menuCta: "Xem thực đơn",
      visitCta: "Đặt bàn trước",
      openingTitle: "Mở cửa từ 07:00",
      openingDescription: "Mẻ rang đầu tiên vừa ra lò",
      image: { src: image.hero, alt: "Nhóm bạn cùng thưởng thức cà phê latte art bên bàn gỗ" },
    },
    marqueeItems: ["Rang mới mỗi sáng", "Arabica Cầu Đất", "Giao trong 30 phút", "Mở cửa 07:00 – 22:00", "Bánh nướng tại chỗ", "Mua hạt mang về"],
    highlights: {
      eyebrow: "Vì sao là Hạt Nâu",
      title: "Bốn điều chúng tôi không đánh đổi",
      items: [
        { id: "highlight-roast", title: "Rang tại chỗ mỗi ngày", description: "Mẻ hạt được rang vào 6 giờ sáng và chỉ phục vụ trong vòng 7 ngày, để giữ trọn hương thơm lúc vừa bung nhất.", icon: "bean" },
        { id: "highlight-origin", title: "Hạt Arabica Cầu Đất", description: "Chúng tôi thu mua trực tiếp từ ba nông hộ ở Cầu Đất, trả giá cao hơn thị trường để người trồng yên tâm làm sạch.", icon: "leaf" },
        { id: "highlight-space", title: "Không gian để thở", description: "Bàn rộng, ổ cắm ở mọi chỗ ngồi và nhạc mở vừa đủ nghe — nơi bạn có thể ngồi làm việc cả buổi mà không bị giục.", icon: "wifi" },
        { id: "highlight-delivery", title: "Giao trong 30 phút", description: "Đặt qua điện thoại hoặc fanpage, cà phê được giao tận nơi trong bán kính 5km mà vẫn còn nguyên độ lạnh.", icon: "truck" },
      ],
    },
    story: {
      eyebrow: "Câu chuyện",
      title: "Bắt đầu từ một máy rang 3kg trong gara",
      paragraphs: [
        "Hạt Nâu bắt đầu năm 2018 từ một chiếc máy rang 3kg đặt trong gara nhà, khi chúng tôi nhận ra mình không tìm nổi một ly cà phê sạch đúng nghĩa trong bán kính đi bộ.",
        "Bảy năm sau, chúng tôi vẫn rang thủ công từng mẻ nhỏ và vẫn ghi ngày rang lên từng túi hạt. Điều duy nhất thay đổi là số người cùng ngồi lại với chúng tôi mỗi sáng.",
      ],
      quote: "Chúng tôi không bán cà phê ngon nhất thành phố. Chúng tôi bán ly cà phê mà mình sẵn sàng uống mỗi ngày.",
      author: "Anh Duy — người sáng lập",
      image: { src: image.story, alt: "Không gian quán với cây xanh, ghế mây và quầy pha chế" },
    },
    menu: {
      eyebrow: "Thực đơn",
      title: "Món quen của quán",
      description: "Giá đã bao gồm thuế. Mọi món đều có thể điều chỉnh độ ngọt và lượng đá theo ý bạn.",
      allLabel: "Tất cả",
      popularLabel: "Bán chạy",
      categories: [
        { id: "ca-phe", label: "Cà phê" },
        { id: "do-uong", label: "Đồ uống khác" },
        { id: "banh", label: "Bánh ngọt" },
      ],
      items: [
        { ...menuData.coffee, name: "Cà phê sữa đá", description: "Robusta rang đậm pha phin, thêm sữa đặc và đá viên — vị quen thuộc của buổi sáng Sài Gòn.", imageAlt: "Ly cà phê sữa đá Việt Nam" },
        { ...menuData.bacXiu, name: "Bạc xỉu", description: "Nhiều sữa, ít cà phê, béo nhẹ và dịu — dành cho những ai mới bắt đầu làm quen với cà phê Việt.", imageAlt: "Ly bạc xỉu nhiều sữa" },
        { ...menuData.coldBrew, name: "Cold brew ủ lạnh 18 giờ", description: "Ủ chậm bằng nước lạnh suốt 18 giờ, hậu vị ngọt thanh của mía và cam vàng, gần như không chua gắt.", imageAlt: "Ly cold brew với đá viên" },
        { ...menuData.cappuccino, name: "Cappuccino", description: "Một shot espresso Arabica cùng lớp bọt sữa mịn dày, rắc chút bột quế theo yêu cầu.", imageAlt: "Tách cappuccino với latte art" },
        { ...menuData.tea, name: "Trà đào cam sả", description: "Trà đen ủ nóng cùng đào ngâm, cam tươi và sả đập dập, uống lạnh rất hợp buổi chiều oi.", imageAlt: "Ly trà đào cam sả mát lạnh" },
        { ...menuData.matcha, name: "Matcha sữa dừa", description: "Matcha Uji đánh tay cùng sữa dừa, ngọt nhẹ và thơm béo, không bị gắt vị bột.", imageAlt: "Ly matcha sữa dừa màu xanh" },
        { ...menuData.croissant, name: "Croissant bơ Pháp", description: "Ủ bột qua đêm, cán 27 lớp bơ Pháp, nướng lại mỗi 2 tiếng nên lúc nào cũng còn giòn.", imageAlt: "Bánh croissant bơ Pháp vàng giòn" },
        { ...menuData.tiramisu, name: "Tiramisu cà phê", description: "Bánh mềm thấm espresso của chính quán, phủ cacao nguyên chất, ngọt vừa phải.", imageAlt: "Miếng tiramisu cà phê phủ cacao" },
        { ...menuData.toast, name: "Bánh mì nướng mật ong", description: "Bánh mì dày nướng bơ, rưới mật ong cùng chuối và việt quất tươi — món no bụng cho buổi sáng.", imageAlt: "Bánh mì nướng mật ong với chuối và quả mọng" },
      ],
    },
    stats: [
      { id: "stat-years", value: "7", label: "Năm rang thủ công" },
      { id: "stat-cups", value: "420", label: "Ly phục vụ mỗi ngày" },
      { id: "stat-farms", value: "3", label: "Nông hộ hợp tác trực tiếp" },
      { id: "stat-regulars", value: "1.800+", label: "Khách quen của quán" },
    ],
    gallery: {
      eyebrow: "Không gian",
      title: "Một buổi sáng ở Hạt Nâu",
      images: [
        { id: "gallery-1", src: image.gallery1, alt: "Không gian quán với bảng hiệu CAFE và đèn thả trần" },
        { id: "gallery-2", src: image.gallery2, alt: "Barista rót sữa tạo hình lá trên tách cà phê" },
        { id: "gallery-3", src: image.gallery3, alt: "Khu vực quầy pha chế và bàn gỗ dài trong quán" },
        { id: "gallery-4", src: image.gallery4, alt: "Hạt cà phê rang sẫm màu nhìn cận cảnh" },
        { id: "gallery-5", src: image.gallery5, alt: "Ly đồ uống bạc hà chanh mát lạnh của quán" },
      ],
    },
    testimonials: {
      eyebrow: "Cảm nhận",
      title: "Khách quen nói gì về quán",
      items: [
        { id: "testimonial-1", quote: "Mình ngồi làm việc ở đây gần như mỗi sáng thứ Bảy. Nhân viên nhớ luôn món quen và chưa lần nào giục mình đứng dậy dù ngồi tới trưa.", name: "Ngọc Anh Trần", role: "Khách quen từ 2021", avatarUrl: "https://i.pravatar.cc/150?img=32", rating: 5 },
        { id: "testimonial-2", quote: "Cold brew ở đây là loại hiếm hoi mình uống được mà không cần thêm đường. Mua hạt về nhà pha cũng ra đúng vị đó.", name: "Minh Khoa Lê", role: "Dân văn phòng gần quán", avatarUrl: "https://i.pravatar.cc/150?img=51", rating: 5 },
        { id: "testimonial-3", quote: "Đặt 40 phần cho buổi họp công ty, giao đúng giờ và còn kèm giấy ghi tên từng người. Chi tiết nhỏ nhưng rất được lòng.", name: "Hải Yến Phạm", role: "Quản lý hành chính", avatarUrl: "https://i.pravatar.cc/150?img=47", rating: 4 },
      ],
    },
    visit: {
      eyebrow: "Ghé quán",
      title: "Chúng tôi đang đợi bạn ở Quận 3",
      description: "Ghé bất cứ lúc nào, hoặc gọi trước nếu bạn đi nhóm đông hơn 6 người để chúng tôi sắp bàn cho vừa.",
      contact: { address: "128 Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh", phone: "0909 123 456", email: "xinchao@hatnau.vn" },
      callToAction: "Gọi đặt bàn",
      hoursTitle: "Giờ mở cửa",
      hours: [
        { days: "Thứ Hai – Thứ Sáu", time: "07:00 – 22:00" },
        { days: "Thứ Bảy – Chủ Nhật", time: "07:30 – 23:00" },
        { days: "Ngày lễ", time: "08:00 – 21:00" },
      ],
      hoursNote: "Bếp ngừng nhận đơn trước giờ đóng cửa 45 phút.",
    },
    footer: {
      description: "Rang thủ công từng mẻ nhỏ tại Quận 3, TP. Hồ Chí Minh.",
      groups: [
        { title: "Khám phá", links: [{ label: "Thực đơn", href: "#menu" }, { label: "Câu chuyện", href: "#story" }, { label: "Không gian", href: "#gallery" }, { label: "Ghé quán", href: "#visit" }] },
        { title: "Dịch vụ", links: [{ label: "Đặt bàn", href: "#visit" }, { label: "Giao hàng tận nơi", href: "#" }, { label: "Đặt tiệc công ty", href: "#" }, { label: "Bán hạt rang", href: "#" }] },
        { title: "Về chúng tôi", links: [{ label: "Tuyển dụng", href: "#" }, { label: "Hợp tác nông hộ", href: "#" }, { label: "Lớp học pha chế", href: "#" }, { label: "Liên hệ", href: "#visit" }] },
      ],
      copyright: "Bảo lưu mọi quyền.",
      socialLinks,
    },
  },
} satisfies Record<Locale, SiteCopy>;

export const getSiteCopy = (locale: Locale): SiteCopy => siteCopy[locale];
export const isLocale = (value: string): value is Locale => value in siteCopy;
