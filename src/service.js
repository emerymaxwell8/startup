const images = [
    "burger-holder.jpg", "pasta-holder.jpg", "pizza-holder.jpg", 
    "bread-meat.jpg", "salmonbowl.jpg", "shrimp.jpg", "waffles.jpg"
]

export function getImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

export function getName() {
    const names = ["Lily", "Danny", "Spencer", "Mia", "Noah"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

export function getPlan() {
    const plans = [
        "I'm making spaghetti",
        "McDonalds!",
        "Trying Pancakes",
        "I'm making a salad",
        "I'm making pizza"
    ];
    const randomIndex = Math.floor(Math.random() * plans.length);
    return plans[randomIndex];
}