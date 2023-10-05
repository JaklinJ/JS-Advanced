function createFormatter(separator, symbol, symbolFirst, formatted) {
    return value => formatted (separator, symbol, symbolFirst,value);
}
