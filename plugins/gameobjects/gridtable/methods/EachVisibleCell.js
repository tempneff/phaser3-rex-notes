// For when you know this Set will be modified during the iteration
var EachVisibleCell = function (callback, scope) {
    this.visibleCells.each(callback, scope);
    return this;
}

// For when you absolutely know this Set won't be modified during the iteration
var IterateVisibleCell = function (callback, scope) {
    this.visibleCells.iterate(callback, scope);
    return this;
}

export { EachVisibleCell, IterateVisibleCell };