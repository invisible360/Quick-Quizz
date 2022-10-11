import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const totalQuiz = useLoaderData();
    const data = totalQuiz.data
    console.log(data);

    return (
        <section>
            <h1 className='text-center text-3xl font-bold my-5'>Number of Quiz Charts (Area Charts)</h1>
            <div className='flex items-center justify-center my-10'>
                <ResponsiveContainer width="90%" height={300}>
                    <AreaChart
                        width={500}
                        height={300}
                        data={data}

                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <p className='text-center w-[90%] mx-auto'>An area chart or area graph displays graphically quantitative data. It is based on the line chart. The area between axis and line are commonly emphasized with colors, textures and hatchings. Commonly one compares two or more quantities with an area chart.</p>
        </section>
    );
};

export default Statistics;