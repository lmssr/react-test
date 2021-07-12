import React from 'react'
import Counter from '../Counter'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("header render with correct text", () => {
	const { getByTestId } = render(<Counter />)
	const headerEl = getByTestId("header"); 

	expect(headerEl.textContent).toBe("My Counter")
})

test("counter initially start at 0", () => {
	const { getByTestId } = render(<Counter />)
	const counterEL = getByTestId("counter")

	expect(counterEL.textContent).toBe("0")
})

test("input contain initial value of 1", () => {
	const { getByTestId } = render(<Counter />)
	const inputEl = getByTestId("input")

	expect(inputEl.value).toBe("1")
})

test("add button render with +", () => {
	const { getByTestId } = render(<Counter />)
	const addbtn = getByTestId("add-btn")

	expect(addbtn.textContent).toBe("+")
})

test("subtract button render with -", () => {
	const { getByTestId } = render(<Counter />)
	const subtractbtn = getByTestId("subtract-btn")

	expect(subtractbtn.textContent).toBe("-")
})

test("change value of input works correctly", () => {
	const { getByTestId } = render(<Counter />)
	const inputEl = getByTestId("input")

	fireEvent.change(inputEl, {
		target: {
			value: "5"
		}	
	})

	expect(inputEl.value).toBe("5")
})

test("clicking on + button add 1 to counter", () => {
	const { getByTestId } = render(<Counter />)
	const addBtnEl = getByTestId("add-btn")
	const counterEL = getByTestId("counter")

	expect(counterEL.textContent).toBe("0")

	fireEvent.click(addBtnEl)

	expect(counterEL.textContent).toBe("1")
})

test("clicking on - button subtracts 1 from counter", () => {
	const { getByTestId } = render(<Counter />)
	const subtractBtnEl = getByTestId("subtract-btn")
	const counterEL = getByTestId("counter")

	expect(counterEL.textContent).toBe("0")

	fireEvent.click(subtractBtnEl)

	expect(counterEL.textContent).toBe("-1")
})

test("changing input value then clicking on add btn works correctly", () => {
	const { getByTestId } = render(<Counter />)
	const addBtnEl = getByTestId("add-btn")
	const counterEL = getByTestId("counter")
	const inputEl = getByTestId("input")

	fireEvent.change(inputEl, {
		target: {
			value:"5"
		}
	})

	fireEvent.click(addBtnEl)

	expect(counterEL.textContent).toBe("5")
}) 

test("changing input value then clicking on add btn works correctly", () => {
	const { getByTestId } = render(<Counter />)
	const subtractBtnEl = getByTestId("subtract-btn")
	const counterEL = getByTestId("counter")
	const inputEl = getByTestId("input")

	fireEvent.change(inputEl, {
		target: {
			value:"5"
		}
	})

	fireEvent.click(subtractBtnEl)

	expect(counterEL.textContent).toBe("-5")
})

test("adding then subtracting leads to the correct counter number", () => {
	const { getByTestId } = render(<Counter />)
	const subtractBtnEl = getByTestId("subtract-btn")
	const addBtnEl = getByTestId("add-btn")
	const counterEL = getByTestId("counter")
	const inputEl = getByTestId("input")

	fireEvent.change(inputEl, {
		target: {
			value:"10"
		}
	})

	fireEvent.click(addBtnEl)
	fireEvent.click(addBtnEl)
	fireEvent.click(addBtnEl)
	fireEvent.click(addBtnEl)
	fireEvent.click(subtractBtnEl)
	fireEvent.click(subtractBtnEl)

	expect(counterEL.textContent).toBe("20")

		fireEvent.change(inputEl, {
		target: {
			value:"5"
		}
	})

	fireEvent.click(addBtnEl)
	fireEvent.click(subtractBtnEl)
	fireEvent.click(subtractBtnEl)

	expect(counterEL.textContent).toBe("15")

})