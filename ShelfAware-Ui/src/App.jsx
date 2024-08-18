import React from 'react';

function App() {
  function dropDownIngredients() {
    document.querySelector('#submenu').classList.toggle('hidden');
    document.querySelector('#arrow').classList.toggle('rotate-0');
  }

  function dropDownProducts() {
    document.querySelector('#submenu2').classList.toggle('hidden');
    document.querySelector('#arrow2').classList.toggle('rotate-0');
  }

  function openBar() {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]');
  }

  return (
    <>
      <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={openBar}>
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
        p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md">
            <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i>
            <h1 className="text-[15px] ml-3 text-xl text-gray-200 font-bold">ShelfAware</h1>
            <i className="bi bi-x ml-20 cursor-pointer lg:hidden" onClick={openBar}></i>
          </div>
          <hr className="my-2 text-gray-600" />

          <div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200">Dashboard</span>
            </div>

            <hr className="my-4 text-gray-600" />

            {/* menu + submenu */}
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-chat-left-text-fill"></i>
              <div className="flex justify-between w-full items-center" onClick={dropDownIngredients}>
                <span className="text-[15px] ml-4 text-gray-200">Ingredients</span>
                <span className="text-sm rotate-180" id="arrow">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </div>
            </div>
            <div className="leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto hidden" id="submenu">
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Ingredients Overview</h1>
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Ingredients In</h1>
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Ingredients Out</h1>
            </div>

            {/* menu + submenu */}
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-chat-left-text-fill"></i>
              <div className="flex justify-between w-full items-center" onClick={dropDownProducts}>
                <span className="text-[15px] ml-4 text-gray-200">Products</span>
                <span className="text-sm rotate-180" id="arrow2">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </div>
            </div>
            <div className="leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto hidden" id="submenu2">
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Products Overview</h1>
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Products In</h1>
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Products Out</h1>
            </div>

            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="text-[15px] ml-4 text-gray-200">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
