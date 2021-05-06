export function shortenAddress(address: string): string {
    return `${address.substring(0, 8)}...${address.substring(42 - 4)}`;
  }