import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";
import { Buffer } from "buffer";

import addresses  from "../config/Whitelist.json";

let merkleTree: MerkleTree;


function getMerkleTree() {
   if (!merkleTree) {
     const leaves = addresses.map((address) => keccak256(address));
     merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
   }
   return merkleTree;
}

export const MerkleProof = (address) => {
  window.Buffer = window.Buffer || Buffer;

  const tree = getMerkleTree();
  const buf2hex = (x) => "0x" + x.toString("hex");
  console.log("Root ", buf2hex(tree.getRoot()))
  const leaf = keccak256(address);
  const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));

  return proof;
};

export const VerifyWallet = (address) => {
  window.Buffer = window.Buffer || Buffer;

  const tree = getMerkleTree()
  const buf2hex = (x) => "0x" + x.toString("hex");
  const root = buf2hex(tree.getRoot());

  const leaf = buf2hex(keccak256(address));
  const hexProof = tree.getHexProof(leaf);

  // verify method
  let isValid = tree.verify(hexProof, leaf, root);

  return isValid;
};
