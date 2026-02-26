const images = [
    "burger-holder.jpg", "pasta-holder.jpg", "pizza-holder.jpg", 
    "bread-meat.jpg", "salmonbowl.jpg", "shrimp.jpg", "waffles.jpg"
]

export function getImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}