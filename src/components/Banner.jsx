import BooksContainer from "./BooksContainer";


const Banner = ({ books }) => {
    return (
        <div>
            <div className="bg-[#1313130D] mt-5 py-16 px-24 rounded-3xl flex justify-center items-center">
                <div className="ml-5 space-y-10">
                    <h1 className="text-[56px] font-bold text-[#131313] ">Books to freshen up your bookshelf</h1>
                    <button className="text-white bg-[#23BE0A] text-xl font-semibold font-secondary px-4 py-3 rounded-2xl">View The List</button>
                </div>
                <div>
                    <img className="w-[600px]" src={books[0].book_image} alt="" />
                </div>
            </div>
            <div className="text-center my-16">
                <h1 className="font-semibold mb-10 text-4xl text-[#131313]">Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        books.map(book => <BooksContainer book={book} key={book.book_Id}></BooksContainer>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;