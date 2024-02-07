"use client";
import { edit, trash } from "@/app/utils/Icons";
import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}

function TacheItem({ title, description, date, isCompleted, id }: Props) {
  return (
    <div className="flex flex-col p-10 border rounded-md shadow">
      <h1 className="font-bold text-xl">{title}</h1>
      <p>{description}</p>
      <p className="date">{date}</p>
      <div className="task-footer">
        {isCompleted ? (
          <button
            className="rounded-full bg-green-600 p-2"
            onClick={() => {
              const task = {
                isCompleted: !isCompleted,
              };
            }}
          >
            Completed
          </button>
        ) : (
          <button
            className="rounded-full bg-red-600 p-2"
            onClick={() => {
                isCompleted: !isCompleted
            }}
          >
            Incomplete
          </button>
        )}
        <button className="edit">{edit}</button>
        <button
          className="delete"
          onClick={() => {
          }}
        >
          {trash}
        </button>
      </div>
    </div>
  );
}


export default TacheItem;