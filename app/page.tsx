"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function TravelLandingPage() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Hero */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            🌴 Southern Vietnam 4D3N
          </h1>
          <p className="text-lg text-gray-600">
            Nam Cat Tien • Ben Tre • Saigon — A perfect mix of jungle, river & city life
          </p>
        </motion.div>

        {/* Section */}
        {[
          {
            day: "Day 1",
            title: "Nam Cat Tien Adventure",
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200",
            content: [
              "05:00 Depart from HCM",
              "08:30 Arrive + ferry crossing",
              "Trek in the forest & biking",
              "Optional night safari 🦌"
            ]
          },
          {
            day: "Day 2",
            title: "Forest Chill → Saigon",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
            content: [
              "Morning nature walk",
              "11:00 Leave Nam Cat Tien",
              "15:00 Back to HCM",
              "Relax evening"
            ]
          },
          {
            day: "Day 3",
            title: "Ben Tre Mekong Vibes",
            image: "https://images.unsplash.com/photo-1595147389795-37094173bfdc?q=80&w=1200",
            content: [
              "Boat ride in coconut canals 🌴",
              "Local food experience",
              "Cycling village roads",
              "Chill homestay"
            ]
          },
          {
            day: "Day 4",
            title: "Saigon Exploration",
            image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200",
            content: [
              "Coffee hopping ☕",
              "Visit Notre Dame & Central Post Office",
              "Nguyen Hue walking street",
              "Rooftop night 🌃"
            ]
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg overflow-hidden">
              <img src={item.image} alt="" className="w-full h-60 object-cover" />
              <CardContent className="p-5">
                <h2 className="text-2xl font-semibold">
                  {item.day} – {item.title}
                </h2>
                <ul className="mt-3 space-y-1 text-gray-600">
                  {item.content.map((line, i) => (
                    <li key={i}>• {line}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Budget */}
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">💰 Budget</h2>
            <p className="text-gray-600">~3.5M – 5M VND / person</p>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">🎒 Tips</h2>
            <ul className="text-gray-600 space-y-1">
              <li>• Sunscreen & comfy shoes</li>
              <li>• Book night safari early</li>
              <li>• Bring mosquito repellent</li>
              <li>• Travel light & camera ready 📸</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
