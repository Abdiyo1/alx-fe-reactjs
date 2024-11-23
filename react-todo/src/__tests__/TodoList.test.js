import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders initial todos correctly", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build Todo App")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add a new task");
        const addButton = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "Write Tests" } });
        fireEvent.click(addButton);

        expect(screen.getByText("Write Tests")).toBeInTheDocument();
    });

    test("toggles todo completion", () => {
        render(<TodoList />);
        const todoItem = screen.getByText("Learn React");

        // Initial state should not be line-through
        expect(todoItem).not.toHaveStyle("text-decoration: line-through");

        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle("text-decoration: line-through");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const deleteButton = screen.getAllByText("Delete")[0];
        const todoItem = screen.getByText("Learn React");

        fireEvent.click(deleteButton);
        expect(todoItem).not.toBeInTheDocument();
    });
});
