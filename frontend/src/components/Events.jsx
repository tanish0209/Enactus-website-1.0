import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { assets } from "../assets/assets";

const events = [
  {
    id: 1,
    name: "AVINYA",
    date: "APRIL 15-16, 2024",
    description:
      "AVINYA was a grand event that brought innovation and creativity to the forefront, featuring two major sub-events, Udyam and Sambhav. These sub-events attracted a large number of participants, fostering an environment of collaboration, entrepreneurship, and problem-solving.  The overwhelming participation and enthusiasm made AVINYA a resounding success, leaving a lasting impact on all attendees.",
    images: [assets.Slider1, assets.Slider2, assets.Slider8],
  },
  {
    id: 2,
    name: "NIRMAAN",
    date: "OCTOBER 16, 2024",
    description:
      "NIRMAAN was an engaging case study competition that drew immense participation and excitement. The event  challenged participants with real-world problem-solving and served as a dynamic platform for innovation. It attracted numerous stalls showcasing impactful projects from various Enactus societies across Delhi. With a blend of competition and exhibition, NIRMAAN fostered collaboration, knowledge exchange, and a spirit of social innovation.",
    images: [assets.Slider5, assets.Slider6, assets.Slider7],
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="w-[95%]">
      <div>
        <div className="bg-gray-700 border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-12">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2">
              <CCarousel controls indicators dark transition="crossfade">
                {event.images.map((image, index) => (
                  <CCarouselItem key={index}>
                    <CImage
                      className="w-full h-64 object-cover md:h-[400px]"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </CCarouselItem>
                ))}
              </CCarousel>
            </div>

            <div className="md:w-1/2 p-4 bg-gray-700 text-yellow-400">
              <div className="border-l-4 border-yellow-400 pl-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-3">
                  {event.name}
                </h3>
                <div className="flex items-center text-gray-300 mb-4">
                  <span className="font-medium md:text-xl text-yellow-400">
                    {event.date}
                  </span>
                </div>
                <p className=" leading-relaxed md:text-xl text-yellow-200">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div>
      <div className="text-5xl p-10 font-bold text-center text-yellow-400 bg-gray-700">
        OUR EVENTS
      </div>

      <div className=" bg-gray-700 ">
        <div className="max-w-8xl p-10 m-auto place-items-center">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
