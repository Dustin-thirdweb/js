/**
 * @internal
 * @param bytecode - The bytecode to check
 */
export function extractMinimalProxyImplementationAddress(
  bytecode: string,
): string | undefined {
  // EIP-1167 clone minimal proxy - https://eips.ethereum.org/EIPS/eip-1167
  if (bytecode.startsWith("0x363d3d373d3d3d363d73")) {
    const implementationAddress = bytecode.slice(22, 62);
    return `0x${implementationAddress}`;
  }

  // Minimal Proxy with receive() from 0xSplits - https://github.com/0xSplits/splits-contracts/blob/c7b741926ec9746182d0d1e2c4c2046102e5d337/contracts/libraries/Clones.sol
  if (bytecode.startsWith("0x36603057343d5230")) {
    // +40 = size of addr
    const implementationAddress = bytecode.slice(122, 122 + 40);
    return `0x${implementationAddress}`;
  }

  // 0age's minimal proxy - https://medium.com/coinmonks/the-more-minimal-proxy-5756ae08ee48
  if (bytecode.startsWith("0x3d3d3d3d363d3d37363d73")) {
    // +40 = size of addr
    const implementationAddress = bytecode.slice(24, 24 + 40);
    return `0x${implementationAddress}`;
  }

  // vyper's minimal proxy (uniswap v1) - https://etherscan.io/address/0x09cabec1ead1c0ba254b09efb3ee13841712be14#code
  if (bytecode.startsWith("0x366000600037611000600036600073")) {
    const implementationAddress = bytecode.slice(32, 32 + 40);
    return `0x${implementationAddress}`;
  }

  return undefined;
}
