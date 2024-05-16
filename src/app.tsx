import React, { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import Section from './Components/Section';
import ProductLink from './Components/ProductLink';
import Button from './Components/Button';

const App = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        fetch('https://petrinet.azurewebsites.net/api/getFeaturedProducts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => setFeaturedProducts(data['products']));
    }, []);

    return (
        <Layout>
            <Section>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                    <div className="grid gap-y-5 md:gap-5 md:col-span-7 md:grid-cols-2">
                        <div className="col-span-1 px-8 py-10 md:col-span-2 bg-secondary">
                            <h1 className="text-3xl text-center md:text-left md:text-5xl w-full line lg:-left-1 xl:-left-2 font-heading font-bold md:pb-12 tracking-[0.2em] text-shadow">
                                CHALLENGE <br /> THE <br />
                                <span className="leading-[1.6] font-grotesk font-bold tracking-[0.5em]">
                                    #NORM
                                </span>
                            </h1>
                        </div>
                        <div className="relative col-span-1">
                            <img
                                src="https://placehold.co/400x600"
                                alt="placeholder"
                                className="relative w-full rounded-sm shadow-sm"
                            ></img>
                            <span className="text-2xl z-[50] font-body font-bold tracking-[0.2em] text-shadow absolute bottom-6 right-4">
                                #ATHLETE
                            </span>
                        </div>
                        <div className="relative col-span-1">
                            <img
                                src="https://placehold.co/400x600"
                                alt="placeholder"
                                className="relative rounded-sm shadow-sm"
                            ></img>
                            <span className="text-2xl z-[50] font-body font-bold tracking-[0.2em] text-shadow absolute bottom-6 right-4">
                                #ATHLETE
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:col-span-5 md:block">
                        <img
                            src="https://placehold.co/600x800"
                            alt="placeholder"
                            className="relative object-cover w-auto h-full overflow-hidden bg-cover rounded-sm shadow-sm"
                        />
                    </div>
                </div>
            </Section>
            <Section className="overflow-hidden">
                <h1 className="text-5xl relative lg:-left-1 xl:-left-2 font-body font-bold tracking-[0.2em] text-shadow text-center animate-marquee overflow-hidden w-[1300px]">
                    HOODIES - STREETWEAR - ESSENTIALS
                </h1>
            </Section>
            <div className="relative py-12">
                <img
                    src="https://placehold.co/1000x400"
                    className="relative object-cover w-full bg-cover h-120"
                    alt="a group of people"
                ></img>
                <Button
                    text="SHOP NOW"
                    variant="solid"
                    className="absolute bottom-0 w-56 mx-auto "
                />
            </div>
            <Section>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                    <img
                        src="https://placehold.co/400x300"
                        alt="placeholder"
                        className="w-full h-full col-span-1 rounded-sm shadow-md md:col-span-7"
                    ></img>
                    <div className="flex flex-row justify-center col-span-1 md:col-span-5">
                        <h1 className="hidden md:block text-2xl my-auto text-center md:text-left md:text-5xl w-full line lg:-left-1 xl:-left-2 font-heading font-bold pb-12 tracking-[0.2em] text-shadow">
                            Each Fabric <br /> telling a <br />
                            <span className="leading-[1.6] font-grotesk font-bold tracking-[0.5em]">
                                STORY
                            </span>
                        </h1>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {featuredProducts.map((product) => (
                        <ProductLink
                            to="../product"
                            name={product['name']}
                            price={product['price']}
                            image={product['image']}
                        />
                    ))}
                </div>
            </Section>
        </Layout>
    );
};

export default App;
