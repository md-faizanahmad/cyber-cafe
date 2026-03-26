"use client";

const reviews = [
  {
    name: "Ravi Kumar",
    text: "मेरा पैन कार्ड जल्दी बन गया, बहुत अच्छा सर्विस।",
  },
  {
    name: "Shabana Parveen",
    text: "आधार अपडेट आसानी से हो गया, कोई परेशानी नहीं हुई।",
  },
  {
    name: "Amit Singh",
    text: "सरकारी फॉर्म सही तरीके से भरा गया, धन्यवाद।",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold">हमारे ग्राहक क्या कहते हैं</h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div key={i} className="bg-gray-50 p-5 rounded-xl border">
              <p className="text-sm text-gray-700">“{review.text}”</p>

              <p className="mt-3 text-sm font-semibold text-black">
                ⭐⭐⭐⭐⭐ {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
