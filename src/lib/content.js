export const PRESS_FEATURE = {
  publication: "Action Bharat News",
  date: "August 17, 2026",
  headline:
    "World Integration Will Happen Through the Spirit of Vasudhaiva Kutumbakam",
  quote:
    "If we must fight, fight against poverty, hunger, ignorance, injustice and discrimination.",
  context: "Jagadguru Swami Chakrapani Ji Maharaj, addressing the Sant Sammelan in London",
  url: "https://actionbharatnews.com/2026/08/17/07/1783/",
};

export const LEADERS = [
  {
    slug: "swami-chakrapani-ji-maharaj",
    name: "Swami Chakrapani Ji Maharaj",
    title: "President, International",
    photo: "/images/swami-chakrapani-ji-maharaj.webp",
    bio: "Guides the Sant Mahasabha's spiritual and organizational mission from the international office in New Delhi.",
  },
  {
    slug: "pawan-kumar-sharma",
    name: "Pawan Kumar Sharma",
    title: "Prabhari, Canada",
    photo: "/images/pawan-kumar-sharma.webp",
    phone: "403-681-2889",
    bio: "Leads the Society's work in Canada, overseeing community programs and services from the Calgary office.",
  },
];

export const CONTACT_EMAIL = "smsoa@gmail.com";

export const OFFICES = [
  {
    label: "Canada Office",
    address: "4852, 50th Ave NE, Calgary, AB T3G 4L8",
    phone: "403-681-2889",
  },
  {
    label: "International Office",
    address: "Mandir Marg, New Delhi, India 110001",
  },
];

function buildPhotoList({ folder, prefix, count, altPrefix }) {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/${folder}/${prefix}-${i + 1}.webp`,
    alt: `${altPrefix} ${i + 1}`,
  }));
}

export const GALLERY = buildPhotoList({
  folder: "gallery",
  prefix: "gallery",
  count: 28,
  altPrefix: "Sant Mahasabha Society of Alberta — community moment",
});

export const IN_NEWS = buildPhotoList({
  folder: "in-news",
  prefix: "news",
  count: 27,
  altPrefix: "Sant Mahasabha Society of Alberta in the news — clipping",
});
