import React, { useEffect, useState } from "react";
import bgImg from "../assets/jimmy-dean-Yn0l7uwBrpw-unsplash-1.png";
import FoodCard from "./FoodCard";
import { useDispatch, useSelector } from "react-redux";

import { fetchFoodData } from "../Redux/Slices/FoodSlice";


const Main = () => {
  const dispatch = useDispatch();
  const { data, searchCategory } = useSelector((state) => state.food);
  console.log("i am searchCategory", searchCategory);

  // Use local state to store the filtered list
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
        dispatch(fetchFoodData());
      }, [dispatch]);

  // Update the searchList whenever searchCategory or data changes
  useEffect(() => {
    // If searchCategory is empty, show all items

    !searchCategory && setSearchList(data);
    
     if(searchCategory === "breakfast"){
      // Filter the items based on the searchCategory
      const filteredData = data.filter((item) =>
      item?.type.toLowerCase().includes(searchCategory.toLowerCase())
      )
      return  setSearchList(filteredData)
            }
      else if(searchCategory === "lunch"){
  // Filter the items based on the searchCategory
  const filteredData = data.filter((item) =>
  item?.type.toLowerCase().includes(searchCategory.toLowerCase())
  )
  return  setSearchList(filteredData)
        }
        else if(searchCategory === "dinner"){
  // Filter the items based on the searchCategory
  const filteredData = data.filter((item) =>
  item?.type.toLowerCase().includes(searchCategory.toLowerCase())
  )
  return  setSearchList(filteredData)
        }
        else if(searchCategory === "all"){
  // Filter the items based on the searchCategory
  const filteredData = data.filter((item) =>
  item?.type.toLowerCase().includes(searchCategory.toLowerCase())
  )
  return  setSearchList(data)
        }
      const filteredData = data.filter((item) =>
        item?.name.toLowerCase().includes(searchCategory.toLowerCase()))
        setSearchList(filteredData)
        return
      
  }, [searchCategory, data]);


  return (
    <section
      className="w-full h-auto md:h-[calc(100vh-162px)] flex justify-center items-center flex-wrap py-5"
      style={{ background: `url(${bgImg}) no-repeat`, backgroundSize: "cover" }}
    >
      <div className="flex justify-center items-center flex-wrap gap-5">
        {searchList.map((item) => (
          <FoodCard
            key={item.name}
            name={item.name}
            price={item.price}
            description={item.text}
            url={item.image}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default Main;
// import React, { useEffect, useState } from "react";
// import bgImg from "../assets/jimmy-dean-Yn0l7uwBrpw-unsplash-1.png";
// import FoodCard from "./FoodCard";
// import { useDispatch, useSelector } from "react-redux";

// import { fetchFoodData } from "../Redux/Slices/FoodSlice";


// const Main = () => {
//   const dispatch = useDispatch();
//   const { data, searchCategory } = useSelector((state) => state.food);
//   console.log("i am searchCategory", searchCategory);

//   // Use local state to store the filtered list
//   const [searchList, setSearchList] = useState([]);

//   useEffect(() => {
//         dispatch(fetchFoodData());
//       }, [dispatch]);

//   // Update the searchList whenever searchCategory or data changes
//   useEffect(() => {
//     // If searchCategory is empty, show all items

//     !searchCategory && setSearchList(data);
    
//     // Filter the items based on the searchCategory
    
//   //    if(searchCategory === "Breakfast"){
//   //     // Filter the items based on the searchCategory
//   //     const filteredData = data.filter((item) =>
//   //     item?.type.toLowerCase().includes(searchCategory.toLowerCase())
//   //     )
//   //     return  setSearchList(filteredData)
//   //           }
//   //     else if(searchCategory === "Lunch"){
//   // // Filter the items based on the searchCategory
//   // const filteredData = data.filter((item) =>
//   // item?.type.toLowerCase().includes(searchCategory.toLowerCase())
//   // )
//   // return  setSearchList(filteredData)
//   //       }
//   //       else if(searchCategory === "Dinner"){
//   // // Filter the items based on the searchCategory
//   // const filteredData = data.filter((item) =>
//   // item?.type.toLowerCase().includes(searchCategory.toLowerCase())
//   // )
//   // return  setSearchList(filteredData)
//   //       }
//   //       else if(searchCategory === "all"){
//   // // Filter the items based on the searchCategory
//   // const filteredData = data.filter((item) =>
//   // item?.type.toLowerCase().includes(searchCategory.toLowerCase())
//   // )
//   // return  setSearchList(data)
//   //       }
//   //     const filteredData = data.filter((item) =>
//   //       item?.name.toLowerCase().includes(searchCategory.toLowerCase()))
//   //       setSearchList(filteredData)
//   //       return
      
//   }, [searchCategory, data]);


//   return (
//     <section
//       className="w-full h-auto md:h-[calc(100vh-162px)] flex justify-center items-center flex-wrap py-5"
//       style={{ background: `url(${bgImg}) no-repeat`, backgroundSize: "cover" }}
//     >
//       <div className="flex justify-center items-center flex-wrap gap-5">
//         {searchList.map((item) => (
//           <FoodCard
//             key={item.name}
//             name={item.name}
//             price={item.price}
//             description={item.text}
//             url={item.image}
//             type={item.type}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Main;
