
// import React, { useState } from "react";
// import "./slider.css"; // Optional: for custom styles

// const images = [
// 	require("../../assets/image1.jpg"),
// 	require("../../assets/image2.jpg"),
// 	require("../../assets/image3.jpg"),
// ];

// const Slider = () => {
// 	const [current, setCurrent] = useState(0);
// 	const length = images.length;

// 	const nextSlide = () => {
// 		setCurrent(current === length - 1 ? 0 : current + 1);
// 	};

// 	const prevSlide = () => {
// 		setCurrent(current === 0 ? length - 1 : current - 1);
// 	};

// 	if (!Array.isArray(images) || images.length === 0) {
// 		return null;
// 	}

// 	return (
// 		<div className="slider">
// 			<button className="left-arrow" onClick={prevSlide}>&#10094;</button>
// 			<button className="right-arrow" onClick={nextSlide}>&#10095;</button>
// 			{images.map((img, idx) => (
// 				<div
// 					className={idx === current ? "slide active" : "slide"}
// 					key={idx}
// 				>
// 					{idx === current && (
// 						<img src={img} alt={`slide-${idx}`} className="image" />
// 					)}
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default Slider;
