import React from "react";
import Menubar from "./Components/Menubar/Menubar";
import Product from "./Components/Product/Product"
import Nav from "../Components/Nav/Nav"
import "./ProductList.scss";

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput : "",
      filteredProducts: [],
      filterdApplies : [],
      products: [],
      categoryOption: [],
      applyOnOption: [],
    }
  } 

  handleFiltered = () => {
    const { categoryOption, applyOnOption, products } = this.state;

    if(categoryOption.length > 0 && !applyOnOption.length) {
      const filterdApplies = products.filter((product) => 
        categoryOption.includes(product.category)
      )
      this.setState({
        filterdApplies,
      })
      
    } else if(!categoryOption.length && applyOnOption.length > 0) {
      const filterdApplies = products.filter((product) => {
        const check = (el) => applyOnOption.includes(el);
        return product.apply_on.some(check)
      })
      this.setState({
        filterdApplies,
      })
    } else if(!categoryOption.length && !applyOnOption.length) {
      this.setState({
        filterdApplies : products,
      })
    } else {
      const filterdApplies = products.filter((product) => 
        categoryOption.includes(product.category)
      ).filter((product) => {
        const check = (el) => applyOnOption.includes(el);
        return product.apply_on.some(check)
      })
      this.setState({
        filterdApplies,
      })
    }

    // () => {
    //   const {categoryOption, applyOnOption, products} = this.state;
    //   this.setState({
    //     filterdApplies : categoryOption.length > 0 ? products.filter((product) => {
    //       return categoryOption.includes(product.category) 
    //     }) : products
    //   })
    // }

    // () => {
    //   const {applyOnOption, filteredProducts} = this.state;
    //   console.log("hello",filteredProducts);
    //   this.setState({
    //     filterdApplies : applyOnOption.length > 0 ? filteredProducts.filter((product) => {   
    //       for (let el of product.apply_on) {
    //         if (applyOnOption.includes(el)) return true;
    //       }        
    //     }) : filteredProducts.filter((product) => {
    //       return categoryOption.includes(product.category) 
    //     })
    //   })
    // }


  }

    getCategories = (name) => {
      const { categoryOption } = this.state
      const isIncluded = categoryOption.includes(name) 
      this.setState({
        categoryOption: isIncluded ? categoryOption.filter((selected) => selected !== name) : [...categoryOption, name],
      }, this.handleFiltered);
    }

    getApplies = (name) => {
      const { applyOnOption } = this.state;
      const isIncluded = applyOnOption.includes(name)
      this.setState({
        applyOnOption : isIncluded ? applyOnOption.filter((selected) => selected !== name) : [...applyOnOption, name]
      }, this.handleFiltered);
    }

  handleSearchBox = () => {
    const { products, searchInput } = this.state;
    this.setState({
      filteredProducts : products.filter((product) => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      })
    })
  }

  handleDefaultSearch = () => {
    this.setState({
      searchInput : "",
    })
  }
  // http://10.58.7.149:8000/shop
  componentDidMount() {
    fetch("/data/data.json", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {this.setState({
        products : res.product_list,
        filteredProducts : res.product_list,
        filterdApplies : res.product_list
      })
      });
  }

  handleChange = (e) => {
    this.setState({
      searchInput : e.target.value
    }, ()=> this.handleSearchBox())
  }

  render() {
    // console.log("filteredProducts>>>", this.state.filteredProducts)
    const { filterdApplies, searchInput } = this.state;
    
    return (
      <div className="ProductList">
        <Nav />
        <section>
          <h1>SHOP</h1>
          <p>(18 PRODUCT)</p>
        </section>
        <main>
          <Menubar
            getCategories = {this.getCategories}
            getApplies = {this.getApplies}
            handleChange = {this.handleChange}
            searchInput = {searchInput}
            handleDefaultSearch = {this.handleDefaultSearch}
            handleSearchBox = {this.handleSearchBox}
          />
          <div className="ProductsContainer">
            {filterdApplies.map(
              ({
                category,
                apply_on,
                color_options,
                product_id,
                name,
                model_image,
                product_image,
                price,
              }) => (
                <Product
                  category={category}
                  apply_on={apply_on}
                  key={product_id}
                  modelImg={model_image}
                  name={name}
                  productImg={product_image}
                  price={price}
                />
              )
            )}
          </div>
        </main>
        <div>포토박스</div>
      </div>
    )
  }
}

export default ProductList;
// import React from "react";
// import Menubar from "./Components/Menubar/Menubar";
// import Product from "./Components/Product/Product";
// import Nav from "../Components/Nav/Nav";
// import "./ProductList.scss";

// class ProductList extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       searchInput: "",
//       products: [],
//       filteredProducts: [],
//       COLOR: false,
//       CARE: false,
//       LIPS: false,
//       EYES: false,
//       FACE: false,
//     };
//   }

//   handleDefaultSearch = () => {
//     this.setState({
//       searchInput: "",
//     });
//   };

//   handleDefaultCategory = () => {
//     this.setState({
//       COLOR: false,
//       CARE: false,
//       LIPS: false,
//       EYES: false,
//       FACE: false,
//     });
//   };

//   handleClickCategory = (name) => {
//     // console.log(name);
//     // this.handleDefaultSearch();
//     // this.setState(
//     //   {
//     //     [name]: !this.state[name],
//     //   },
//     //   () => {
//     //     const { filteredProducts } = this.state;
//     //     this.setState({
//     //       filteredProducts :  
//     //     })
//     //   }
//     // );
//   };

//   handleClickApplies = (name) => {
//     console.log(name);
//     this.handleDefaultSearch();
//     this.setState({
//       [name]: !this.state[name],
//     });
//   };

//   getCategories = (name) => {
//     // console.log(name);
//     // const { products } = this.state;
//     // this.setState({
//     //   filteredProducts : name ? products.filter((product) => product.category === name) : products.filter((product) => product.category !== name)
//     // })
//   };

//   getApplies = (name) => {
//     console.log(name);
//     // const { apply_on_name } = this.state;
//     // const isIncluded = apply_on_name.includes(name)
//     // this.setState({
//     //   apply_on_name : isIncluded ? apply_on_name.filter((selected) => selected !== name) : [...apply_on_name, name]
//     // });
//   };

//   handleSearchBox = () => {
//     const { products, searchInput } = this.state;
//     this.setState({
//       filteredProducts: products.filter((product) => {
//         return product.name.toLowerCase().includes(searchInput.toLowerCase());
//       }),
//     });
//   };

//   // http://10.58.7.149:8000/shop
//   componentDidMount() {
//     fetch("/data/data.json", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({
//           products: res.product_list,
//           filteredProducts: res.product_list,
//         });
//       });
//   }

//   handleChange = (e) => {
//     this.setState(
//       {
//         searchInput: e.target.value,
//       },
//       () => this.handleSearchBox()
//     );
//   };

//   render() {
//     const { products, searchInput, COLOR, CARE, LIPS, EYES, FACE } = this.state;

//     const filteredProducts = products.filter((product) => {
//       return product.name.toLowerCase().includes(searchInput.toLowerCase());
//     });
//     return (
//       <div className="ProductList">
//         <Nav />
//         <section>
//           <h1>SHOP</h1>
//           <p>(18 PRODUCT)</p>
//         </section>
//         <main>
//           <Menubar
//             handleChange={this.handleChange}
//             searchInput={searchInput}
//             handleDefaultSearch={this.handleDefaultSearch}
//             handleSearchBox={this.handleSearchBox}
//             handleClickCategory={this.handleClickCategory}
//             handleClickApplies={this.handleClickApplies}
//             COLOR={COLOR}
//             CARE={CARE}
//             LIPS={LIPS}
//             EYES={EYES}
//             FACE={FACE}
//           />
//           <div className="ProductsContainer">
//             {filteredProducts.map(
//               ({
//                 category,
//                 apply_on,
//                 color_options,
//                 product_id,
//                 name,
//                 model_image,
//                 product_image,
//                 price,
//               }) => (
//                 <Product
//                   category={category}
//                   apply_on={apply_on}
//                   key={product_id}
//                   modelImg={model_image}
//                   name={name}
//                   productImg={product_image}
//                   price={price}
//                 />
//               )
//             )}
//           </div>
//         </main>
//         <div>포토박스</div>
//       </div>
//     );
//   }
// }

// export default ProductList;