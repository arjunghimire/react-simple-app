/*
 *   Copyright (c) 2020 Arjun Ghimire (arjunghimire0714@gmail.com)
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [pageCount, setPageCount] = useState(5);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setTodos(response.data);
    } catch (e) {
      console.warn("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    setPageCount(pageCount + 5);
  };
  return (
    <div>
      {todos.length > 0 ? (
        todos.slice(0, pageCount).map((todo) => {
          return (
            <Link key={todo.id} to={`/todo/${todo.id}`}>
              {todo.title}
            </Link>
          );
        })
      ) : (
        <p>Loading ...</p>
      )}

      <button onClick={handleClick}>Load More</button>
    </div>
  );
};

export default Todo;
