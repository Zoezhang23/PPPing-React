

const list = {
    order: [{
        productId: 1,
        descrp: "[5  iphones of 26.8 €] Classic Children's Literature Coloring  iphone Youth Edition Eighty Days Around the Globe Chinese Syllabus for Middle School Students",
        imgUrl: "../upload/p1.jpg",
        price: 12.6,
        piceses: 1,
        stock: 10,
        checked: true
    },
    {
        id: 2,
        descrp: "[2000 stickers] Sticker  iphone 3-6 years old stickers for children, a full set of 12 volumes of stickers for children, stickers for children",
        price: 24.8,
        imgUrl: "../upload/p2.jpg",
        piceses: 1,
        stock: 10,
        checked: true
    },
    {
        id: 3,
        descrp: "Three hundred Tang poems + 2 full idiom stories, first- grade extracurricular  iphones, hardcover phonetic children's edition, extracurricular reading  iphones for pupils in second and third grades",
        price: 29.8,
        stock: 10,
        imgUrl: "../upload/p3.jpg",
        piceses: 1,
        checked: true
    }
    ]
}
export default function order(preState = list, action) {

    return preState
}