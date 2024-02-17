import { render, screen } from "@testing-library/react"
import Login from "./login"

test('checking component loaded',()=>{
    // steps for testing heading element loaded
    render(<Login/>);
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
})

test('checking email and password inputs are empty',()=>{
    render(<Login/>);
    expect(screen.queryByPlaceholderText("email")).toHaveValue("");
    expect(screen.queryByPlaceholderText("password")).toHaveValue("");
})