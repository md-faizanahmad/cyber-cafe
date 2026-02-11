// components/TrustBuilder.tsx

export default function TrustBuilder() {
  const trustPoints = [
    {
      title: "सही और भरोसेमंद जानकारी",
      description:
        "हर फॉर्म और आवेदन सही नियमों के अनुसार भरा जाता है ताकि कोई गलती न हो।",
    },
    {
      title: "कम समय में काम पूरा",
      description:
        "लंबी लाइन और बार-बार चक्कर लगाने की जरूरत नहीं, आपका काम जल्दी और सरल तरीके से होता है।",
    },
    {
      title: "सुरक्षित ऑनलाइन सेवा",
      description: "आपकी व्यक्तिगत जानकारी पूरी तरह सुरक्षित रखी जाती है।",
    },
    {
      title: "अनुभवी और ईमानदार सेवा",
      description:
        "हम स्थानीय लोगों की कई वर्षों से सेवा कर रहे हैं, सही मार्गदर्शन हमारा वादा है।",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          क्यों चुनें हमारा साइबर कैफे?
        </h2>
        <p className="mt-2 text-gray-600">
          भरोसा, सही जानकारी और समय की बचत – यही हमारी पहचान है।
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm border hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {point.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
