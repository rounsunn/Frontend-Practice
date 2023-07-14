const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const baby = document.querySelector(".baby");

// propagation happens from document to target then target to document
// capture - window to target then bubble - target to document

parent.addEventListener("click", () => {
  console.log("Parent Bubble")
})

parent.addEventListener(
  "click",
  () => {
    console.log("Parent Capture")
  },
  { capture: true }
)

child.addEventListener("click", () => {
  console.log("Child Bubble")
})

child.addEventListener(
  "click",
  () => {
    console.log("Child Capture")
  },
  { capture: true }
)

baby.addEventListener("click", () => {
  console.log("Baby Bubble")
})

baby.addEventListener(
  "click",
  (e) => {
    console.log("Baby Capture")
  },
  { capture: true }
)


// stop propagation
baby.addEventListener(
  "click",
  (e) => {
    e.stopPropagation()
    console.log("Baby Capture")
  },
  { capture: true }
)