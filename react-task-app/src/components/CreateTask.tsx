import React, { useState } from "react";

interface CreateTaskProps {
  onTaskCreated: (task: { id: number; description: string }) => void;
  getTasks: () => void; 
 }
 

const CreateTask: React.FC<CreateTaskProps> = ({ onTaskCreated, getTasks }) => {
 const [newDescription, setNewDescription] = useState("");

 const submitTask = async (event: React.KeyboardEvent) => {
  if (event.key === 'Enter') {
   event.preventDefault();
   const response = await fetch("http://localhost:3000/api/tasks", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ description: newDescription }),
   });
 
   if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
   } else {
     const task = await response.json();
     setNewDescription('');
     onTaskCreated(task);
     getTasks(); // Usa la función getTasks aquí
   }
  }
 };
 
 

 const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
 setNewDescription(event.target.value);
 };

 return (
 <div>
   <div className="p-2 w-full flex justify-center ">
     <textarea
       id="message"
       rows={4}
       className="block w-72 sm:w-72 md:w-[800px] p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="Write your thoughts here..."
       value={newDescription}
       onChange={handleInputChange}
       onKeyPress={submitTask}
     ></textarea>
   </div>
 </div>
 );
};

export default CreateTask;
