export class Paginator<T> {
    items: T[];
    itemsCount: number;

    perPage: number;
    currentPage: number;

    firstPage: number;
    lastPage: number;

    constructor(
        items: T[],
        perPage: number,
        currentPage: number,
    ) {
        this.items = items;
        this.itemsCount = items.length;

        this.perPage = perPage;
        this.currentPage = currentPage;

        this.firstPage = 1;
        this.lastPage = Math.ceil(this.itemsCount / perPage);
    }

    get hasPages(): boolean {
        return this.lastPage > this.firstPage;
    }

    get hasMorePages(): boolean {
        return this.currentPage < this.lastPage;
    }

    get onFirstPage(): boolean {
        return this.currentPage === this.firstPage;
    }

    get onLastPage(): boolean {
        return this.currentPage === this.lastPage;
    }

    get nextPage(): number | null {
        return this.hasMorePages ? this.currentPage + 1 : null;
    }

    get prevPage(): number | null {
        return !this.onFirstPage ? this.currentPage -1 : null;
    }

    get targetItemOffset(): number {
        return (this.currentPage - 1) * this.perPage;
    }

    get targetStartItem(): number {
        return Math.min(this.targetItemOffset + 1, this.itemsCount);
    }

    get targetEndItem(): number {
        return Math.min(this.currentPage * this.perPage, this.itemsCount);
    }

    get itemsForPage(): T[] {
        return this.items.slice(
            this.targetStartItem - 1,
            this.targetEndItem
        );
    }
}
