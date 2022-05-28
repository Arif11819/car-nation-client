import React from 'react';

const Blogs = () => {
    return (
        <div className="question grid grid-rows-1 gap-9 m-5">
            <div className='border-b-2 border-primary py-4'>
                <h1 className='text-4xl text-secondary text-center'>How will you improve the performance of a React Application?</h1>
                <p className='text-2xl text-center py-4'>Keeping component state local where necessary.
                    Memoizing React components to prevent unnecessary re-renders.
                    Code-splitting in React using dynamic import()
                    Windowing or list virtualization in React.
                    Lazy loading images in React.</p>
            </div>
            <div className='border-b-2 border-primary py-4'>
                <h1 className='text-4xl text-secondary text-center'>What are the different ways to manage a state in a React application?</h1>
                <p className='text-2xl text-center py-4'>There are four main types of state you need to properly manage in your React apps:
                    Local state.
                    Global state.
                    Server state.
                    URL state.</p>
            </div>
            <div className='border-b-2 border-primary py-4'>
                <h1 className='text-4xl text-secondary text-center'>How does prototypical inheritance work?</h1>
                <p className='text-2xl text-center py-4'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='border-b-2 border-primary py-4'>
                <h1 className='text-4xl text-secondary text-center'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <p className='text-2xl text-center py-4'>When we directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.</p>
            </div>
            <div className='border-b-2 border-primary py-4'>
                <h1 className='text-4xl text-secondary text-center'> What is a unit test? Why should write unit tests?</h1>
                <p className='text-2xl text-center py-4'>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>
            </div>
        </div>
    );
};

export default Blogs;
