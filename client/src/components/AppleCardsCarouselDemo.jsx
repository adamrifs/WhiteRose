"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import '../css/Cards.css'

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="occasions-section">
            <h2 className="occasions-heading">CATEGORIES</h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="content-card"
                    >
                        <p className="content-text">
                            <span className="content-highlight">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing class
                            notes. Want to convert those notes to text? No problem. Langotiya jeetu
                            ka mara hua yaar is ready to capture every thought.
                        </p>

                        <img
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="content-image"
                        />
                    </div>

                );
            })}
        </>
    );
};

const data = [
    {
        category: "Classic",
        title: "Rose",
        src: "https://images.pexels.com/photos/10217721/pexels-photo-10217721.jpeg",
        content: <DummyContent />,
    },
    {
        category: "Cheerful",
        title: "Sunflower",
        src: "https://images.pexels.com/photos/7431024/pexels-photo-7431024.jpeg",
        content: <DummyContent />,
    },
    {
        category: "Fragrant",
        title: "Lavender",
        src: "https://images.pexels.com/photos/9284995/pexels-photo-9284995.jpeg",
        content: <DummyContent />,
    },

    {
        category: "Tropical",
        title: "Bird of Paradise",
        src: "https://images.pexels.com/photos/7545586/pexels-photo-7545586.jpeg",
        content: <DummyContent />,
    },
    {
        category: "Seasonal",
        title: "Daffodil",
        src: "https://images.pexels.com/photos/4466447/pexels-photo-4466447.jpeg",
        content: <DummyContent />,
    },
    {
        category: "Wedding",
        title: "Calla Lily",
        src: "https://images.pexels.com/photos/2879812/pexels-photo-2879812.jpeg",
        content: <DummyContent />,
    },
];
