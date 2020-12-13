import React from 'react'

const Card = () => (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div>
                    <a href="#" className="block text-xl font-semibold leading-7 text-gray-900">
                        Mastering                                Livewire</a>
                    <p className="mt-3 text-base leading-6 text-gray-500">Tired of Vue or React? Why not try Livewire, the fullstack framework for dynamic interfaces.</p>
                </div>
                <p className="mt-3 text-sm font-medium leading-5">
                    <a href="#" className="inline-block">
                        <span
                            className="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-blue-800 bg-blue-100 rounded-full">Livewire</span>
                    </a>
                </p>
            </div>
            <div className="flex items-center p-6 bg-gray-100">
                <div className="flex-shrink-0">
                    <a href="#">
                        <img className="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                            alt="" />
                    </a>
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium leading-5 text-gray-900">
                        <a href="#" className="hover:underline">Jane Cooper</a>
                    </p>
                    <div className="text-xs leading-5 text-gray-600">
                        <time datetime="2020-05-31">May 31, 2020</time>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Card