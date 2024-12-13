"use client";
import React, { useEffect, useState } from "react";
import Styles from "./page.module.css";
import axios from "axios";
import store from "store2";
import _ from "lodash";
import { motion } from "framer-motion";

interface types {
  quantity: number;
  name: string;
  price: number;
  category: string;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  list: any;
  setlist: any;
  remove: any;
  item: any;
  update: any;
}

const Page = () => {
  const url = "/assets/data/product-list/data.json";
  const [products, setproducts] = useState<types[]>([]);

  const [addList, setaddList] = useState<any>([]);

  const [modal, setmodal] = useState<boolean>(false);

  const fetch = async () => {
    const res = await axios.get(url);
    setproducts(res.data);
  };

  const getStore = () => {
    const add = store.get("addingList") || [];
    setaddList(add);
  };

  useEffect(() => {
    fetch();
    getStore();
  }, []);

  const updateStore = (newlist: any) => {
    store.set("addingList", newlist);
    setaddList(newlist);
  };

  const handleRemove = (name: string) => {
    const newList = addList.filter((e: types) => e.name !== name);
    updateStore(newList);
  };

  const handleUpdate = (name: string, quantity: number, product: types) => {
    if (quantity <= 0) {
      handleRemove(name);
    } else {
      const exist = addList.find((e: types) => e.name === name);
      if (exist) {
        const updated = addList.map((item: types) =>
          item.name === name ? { ...item, quantity } : item
        );
        updateStore(updated);
      } else {
        const newItem = { ...product, quantity };
        const updated = [...addList, newItem];
        updateStore(updated);
      }
    }
  };

  const orderTotalPrice = () => {
    const sum = addList.reduce((acc: number, item: types) => {
      return acc + item.price * item.quantity;
    }, 0);

    const totalInDollar = sum.toLocaleString("en-us", {
      style: "currency",
      currency: "usd",
    });

    return totalInDollar;
  };

  const totalCartQuantity = () => {
    const sum = addList.reduce((acc: number, item: types) => {
      return acc + item.quantity;
    }, 0);

    return sum;
  };

  const handleModal = () => {
    setmodal(!modal);
  };

  return (
    <main className="min-h-svh bg-[#fcf8f5]">
      <section className={` ${Styles.wrapper}`}>
        <div className={`${Styles.menu} `}>
          <h1 className={`${Styles.title} `}>Desserts</h1>
          <div className={`${Styles.cards}`}>
            {products.map((product: types, index) => {
              return (
                <Product
                  key={index}
                  {...product}
                  list={addList}
                  update={handleUpdate}
                  item={product}
                />
              );
            })}
          </div>
        </div>
        <div className={`${Styles.cart}`}>
          <header className={`${Styles.header}`}>
            Your Cart ({totalCartQuantity()})
          </header>
          {addList.length <= 0 ? (
            <div className={`${Styles.empty}`}>
              <img
                className={`${Styles.image}`}
                src="/assets/images/product-list/illustration-empty-cart.svg"
                alt="empty cart"
              />
              <p className={`${Styles.text}`}>
                Your added items will appear here
              </p>
            </div>
          ) : (
            <div className={`${Styles.contain}`}>
              {addList.map((e: types, index: number) => {
                const priceInDollar = e.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                });

                const totalPrice = () => {
                  const sum = e.price * e.quantity;

                  const totalInDollar = sum.toLocaleString("en-us", {
                    style: "currency",
                    currency: "usd",
                  });

                  return totalInDollar;
                };

                return (
                  <main key={index}>
                    <div className={`${Styles.item}`}>
                      <div className={`${Styles.info}`}>
                        <p className={`${Styles.name}`}>{e.name}</p>
                        <div className={`${Styles.special}`}>
                          <span className={`${Styles.count}`}>
                            {e.quantity}x
                          </span>
                          <div className={`${Styles.price}`}>
                            <div className={`${Styles.price1}`}>
                              <span>@</span>
                              <span className={`${Styles.noramlPrice}`}>
                                {priceInDollar}
                              </span>
                            </div>
                            <p className={`${Styles.totalPrice}`}>
                              {totalPrice()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${Styles.remove}`}
                        onClick={() => {
                          handleRemove(e.name);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="none"
                          viewBox="0 0 10 10"
                        >
                          <path
                            className={`${Styles.icon}`}
                            fill="#CAAFA7"
                            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <hr className={`${Styles.line}`} />
                  </main>
                );
              })}
              <div className={`${Styles.total}`}>
                <p className={`${Styles.text}`}>Order Total</p>
                <p className={`${Styles.totalPrice}`}>{orderTotalPrice()}</p>
              </div>
              <div className={`${Styles.slogan}`}>
                <img
                  src="/assets/images/product-list/icon-carbon-neutral.svg"
                  alt=""
                />
                <p>
                  This is a <b>carbon-neutral</b> delivery
                </p>
              </div>
              <button
                className={`${Styles.button}`}
                onClick={() => {
                  handleModal();
                }}
              >
                Confirm Order
              </button>
            </div>
          )}
        </div>
      </section>

      {modal && (
        <Modal
          handle={handleModal}
          list={addList}
          reset={updateStore}
          change={modal}
          total={orderTotalPrice()}
        />
      )}
    </main>
  );
};

const Modal = ({
  handle,
  list,
  reset,
  change,
  total,
}: {
  handle: any;
  list: any;
  reset: any;
  change: any;
  total: any;
}) => {
  const moving = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  const moving2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.div
      key={change}
      variants={moving}
      initial="initial"
      animate="animate"
      className={`h-svh w-full bg-[#000000d8] fixed top-0 z-[2] grid place-items-center`}
    >
      <div
        className="fixed top-0 w-full h-full"
        onClick={() => {
          handle();
        }}
      />
      <motion.div
        variants={moving2}
        className="border bg-white w-full max-h-[80%] rounded-[12px_12px_0_0] p-6 flex flex-col justify-between z-[3] gap-6 font-[redhat] overflow-auto self-end md:w-[500px] md:self-center md:rounded-xl"
      >
        <motion.div
          variants={moving}
          className="flex gap-4 flex-col items-baseline"
        >
          <img
            src="/assets/images/product-list/icon-order-confirmed.svg"
            alt="confirmed"
          />
          <div className="flex flex-col gap-1">
            <h1 className=" text-3xl font-[redhat3]">Order Confirmed</h1>
            <p className="opacity-50 text-sm">We hope you enjoy your food!</p>
          </div>
        </motion.div>
        <motion.div
          variants={moving}
          className=" flex-1 flex flex-col gap-4 p-5 rounded-lg bg-[#fcf8f5]"
        >
          <div className="flex-1 grid gap-4">
            {list.map((item: any, index: number) => {
              const priceInDollar = item.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              });

              const totalPrice = () => {
                const sum = item.price * item.quantity;

                const totalInDollar = sum.toLocaleString("en-us", {
                  style: "currency",
                  currency: "usd",
                });

                return totalInDollar;
              };

              return (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 font-[redhat2]">
                    <img
                      src={item.image.thumbnail}
                      alt={item.name}
                      className="rounded-xl w-[55px] "
                    />
                    <div className="flex flex-col justify-between gap-2 flex-1 text-sm ">
                      <p className="">{item.name}</p>
                      <div className="flex gap-4">
                        <span className="text-[#c73a0f]">{item.quantity}x</span>
                        <span className="text-[#87635a9c]">
                          @ {priceInDollar}
                        </span>
                      </div>
                    </div>
                    <span className="">{totalPrice()}</span>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm mb-1">Order Total</p>
            <span className="font-[redhat3] text-3xl">{total}</span>
          </div>
        </motion.div>
        <motion.button
          variants={moving}
          className="text-center bg-[#c73a0f] text-white rounded-full p-3 font-[redhat] active:bg-[#9c2f0e] md:hover:bg-[#9c2f0e] transition duration-300"
          onClick={() => {
            handle();
            reset([]);
          }}
        >
          Start New Order
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Product = ({
  name,
  price,
  image,
  category,
  list,
  update,
  item,
}: types) => {
  const isExist = list.find((item: any) => item.name === name);
  const currentQ = isExist?.quantity || 0;

  const priceInDollar = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={`${Styles.card}`}>
      <picture>
        <source media="(max-width: 500px)" srcSet={image.mobile} />
        <source media="(max-width: 768px)" srcSet={image.tablet} />
        <img
          className={`${Styles.image}`}
          style={{
            outline: currentQ > 0 ? "2px solid #c73a0f" : "none",
          }}
          src={image.desktop}
          alt="Responsive"
        />
      </picture>

      {currentQ > 0 ? (
        <div className={`${Styles.counter} `}>
          <button
            className={`${Styles.minus}`}
            onClick={() => {
              update(name, currentQ - 1, item);
            }}
          >
            <i className={`${Styles.icon} fa fi-br-minus`}></i>
          </button>
          <span className={`${Styles.count}`}>{currentQ}</span>
          <button
            className={`${Styles.plus}`}
            onClick={() => {
              update(name, currentQ + 1, item);
            }}
          >
            <i className={`${Styles.icon} fa fi-br-plus`}></i>
          </button>
        </div>
      ) : (
        <button
          className={`${Styles.add} `}
          onClick={() => {
            update(name, 1, item);
          }}
        >
          <img
            className={`${Styles.icon}`}
            src="/assets/images/product-list/icon-add-to-cart.svg"
            alt="add to cart"
          />
          <span className={`${Styles.text}`}>Add to Cart</span>
        </button>
      )}

      <div className={`${Styles.content}`}>
        <p className={`${Styles.category}`}>{category}</p>
        <h1 className={`${Styles.name}`}>{name}</h1>
        <p className={`${Styles.price}`}>{priceInDollar}</p>
      </div>
    </div>
  );
};

export default Page;
