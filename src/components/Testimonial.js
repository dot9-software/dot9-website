export default function Testimonial({
    text,
    authorName,
    authorDescription,
    authorImageUrl,
    companyName,
    companyUrl,
}) {
    return (
        <div className="max-w-3xl mx-auto mb-24" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                {/* Testimonial */}
                <div className="text-center px-4 py-8 pt-20">
                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                        <div className="bg-red flex justify-center justify-items-center  w-24 h-24 border-2 border-gray-200 rounded-full">
                            <img
                                className="object-scale-down relative max-w-full rounded-full"
                                src={authorImageUrl}
                                alt="Testimonial"
                            />
                        </div>
                    </div>
                    <blockquote className="text-lg mb-4 text-justify">
                        {text}
                    </blockquote>
                    <cite className="block font-bold text-lg not-italic mb-1">
                        {authorName}
                    </cite>
                    <div className="text-gray-600">
                        <span>{authorDescription}</span>{" "}
                        <a
                            className="text-blue-600 hover:underline"
                            href={companyUrl}
                        >
                            @{companyName}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
