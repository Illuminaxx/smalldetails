import Card from "./Card";


const cardDetails = [
  {
    imageUrl: "/raycast_bg_2.png",
    title: "Raycast Wallpaper #1",
    description: "Recreate this wallpaper using AI.",
  },
  {
    imageUrl: "/raycast_bg_1.png",
    title: "Raycast Wallpaper #2",
    description: "You can do this one on Photoshop.",
  },
  {
    imageUrl: "/raycast_bg_3.png",
    title: "Raycast Wallpaper #3",
    description: "This one is a bit tricky, but you can do it !",
  },
];
export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center grid grid-cols-3 mx-auto w-fit gap-4">
    {cardDetails.map((card, index) => (
      <Card
        key={index}
        imageUrl={card.imageUrl}
        title={card.title}
        description={card.description}
      />
    ))}
  </main>
  );
}
