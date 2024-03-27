
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { getBooks } from '../utility';
const PagesRead = () => {

    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks();
        setReadBooks(storedBooks);
    }, [])

    const colors = ['#0088FE', '#00C49F', '#FFBB28','green' ,'#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div style={{ width: '100%', height: 550 }}>
            <ResponsiveContainer>

                <BarChart
                    width={1200}
                    height={550}
                    data={readBooks}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="book_name" />
                    <YAxis />
                    {/* <Legend></Legend> */}
                    <Tooltip></Tooltip>
                    <Bar dataKey="total_pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>

            </ResponsiveContainer>

        </div>
    );
};

export default PagesRead;