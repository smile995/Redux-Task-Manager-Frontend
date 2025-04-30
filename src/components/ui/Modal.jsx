// import { useState } from 'react'
// import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

// export default function Modal() {
//   const [isOpen, setIsOpen] = useState(true)

//   function open() {
//     setIsOpen(true)
//   }

//   function close() {
//     setIsOpen(false)
//   }

//   return (
//     <>
//       <button
//         onClick={open}
//         className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:outline-none hover:bg-black/30"
//       >
//         Open dialog
//       </button>

//       <Dialog
//         open={isOpen}
//         as="div"
//         className="relative z-10 focus:outline-none"
//         onClose={close}
//         __demoMode
//       >
//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4">
//             <DialogPanel
//               transition
//               className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
//             >
//               <DialogTitle as="h3" className="text-base font-medium text-white">
//                 Payment successful
//               </DialogTitle>
//               <Dialog.Description className="mt-2 text-sm text-white/50">
//                 Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
//                 order.
//               </Dialog.Description>
//               <div className="mt-4">
//                 <button
//                   onClick={close}
//                   className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
//                 >
//                   Got it, thanks!
//                 </button>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </>
//   )
// }
