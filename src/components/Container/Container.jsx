import React from "react";
import { Carousel1 } from "../Carousel/Carousel";
import { Header } from "../Header/Header";

export const Container = () => {
  const style2 ="carousel-container carousel-2";
  const style1 ="carousel-container";
  const data = [{
		"title": "SpiderMan 1",
		"genre": "Action",
		"year": "2010",
	},
	{
		"title": "SpiderMan 2",
		"genre": "Action",
		"year": "2014",
	},
	{
		"title": "SpiderMan 3",
		"genre": "Action",
		"year": "2020",
	},
	{
		"title": "Batman",
		"genre": "Action",
		"year": "2010",
	},
	{
		"title": "Batman 2",
		"genre": "Action",
		"year": "2011",
	},
	{
		"title": "Batman 3 ",
		"genre": "Action",
		"year": "2018",
	},
	{
		"title": "Superman",
		"genre": "Action",
		"year": "2010",
	},
	{
		"title": "Superman 2",
		"genre": "Action",
		"year": "2011",
	},
	{
		"title": "Superman 3 ",
		"genre": "Action",
		"year": "2018",
	},
	{
		"title": "Avengers",
		"genre": "Action",
		"year": "2010",
	},
	{
		"title": "Avengers 2",
		"genre": "Action",
		"year": "2011",
	},
	{
		"title": "Avengers 3 ",
		"genre": "Action",
		"year": "2018",
	},
	{
		"title": "Robin 1 ",
		"genre": "Action",
		"year": "2018",
	},
	{
		"title": "Robin 2",
		"genre": "Action",
		"year": "2011",
	},
	{
		"title": "Robin 3 ",
		"genre": "Action",
		"year": "2018",
	},
];
  return (
    <div>
      <Header />
      <Carousel1 style={style1} id={'carousel'} data={data} />
      <Carousel1 style={style2} id={'carousel-1'} data={data} />
    </div>
  );
};
