import React from "react";

import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";

const SpecialMenu = () => (
	<div className="app__specialMenu flex__center section__padding" id="menu">
		{/* HEAD */}
		<div className="app__specialMenu-title">
			<SubHeading title="Menu that  fits your palatte" />
			<h1 className="headtext__cormorant">Today&apos;s Special</h1>
		</div>

		{/* Container */}
		<div className="app__specialMenu-menu">
			{/* Start */}
			<div className="app__specialMenu-menu_wine flex__center">
				<p className="app__specialMenu-menu_heading">Wine & Beer</p>
				<div className="app__specialMenu-menu_items">
					{data.wines.map((wine, index) => (
						<MenuItem
							key={wine.title + index}
							title={wine.title}
							price={wine.price}
							tags={wine.tags}
						/>
					))}
				</div>
			</div>

			{/* IMG */}

			<div className="app__specialMenu-menu_img">
				<img src={images.menu} alt="menu" />
			</div>

			{/* End */}
			<div className="app__specialMenu-menu_cocktails flex__center">
				<p className="app__specialMenu-menu_heading">Cocktails</p>
				<div className="app__specialMenu-menu_items">
					{data.cocktails.map((cocktail, index) => (
						<MenuItem
							key={cocktail.title + index}
							title={cocktail.title}
							price={cocktail.price}
							tags={cocktail.tags}
						/>
					))}
				</div>
			</div>
		</div>

		{/* FOOTER */}
		<div style={{ marginTop: 15 }}>
			<button className="custom__button" type="button">
				View more
			</button>
		</div>
	</div>
);

export default SpecialMenu;
