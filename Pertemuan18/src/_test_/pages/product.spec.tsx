import { render, screen } from "@testing-library/react"
import { describe, it, expect, jest } from "@jest/globals"
import TampilanProduk from "@/pages/produk"

jest.mock("next/router", () => ({
    __esModule: true, 
    useRouter: () => ({
        route: "/produk",
        pathname: "/produk",
        query: {},
        asPath: "/produk",
        push: jest.fn(),
        events: {
            on: jest.fn(),
            off: jest.fn(),
        },
        isReady: true,
    }),
}))

describe("Daftar Produk", () => {
    it("renders product page correctly", () => {
        const page = render(<TampilanProduk />)
        expect(screen.getByTestId("title").textContent).toBe("Daftar Produk")
        expect(page).toMatchSnapshot()
    })
})