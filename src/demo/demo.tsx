import '@/lib/styles.css'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/lib/alert-dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/dialog'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/lib/sheet'
import { Button } from '@/ui/button'

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const

export function Demo() {
  return (
    <div className='container grid min-h-screen grid-cols-4 place-content-center gap-6 font-sans'>
      {/* Alert Dialog Component */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className='col-span-2' variant='outline'>
            Alert Dialog
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              A modal dialog that interrupts the user with important content and expects a response.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Dialog Component */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className='col-span-2' variant='outline'>
            Dialog
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Dialog</DialogTitle>
            <DialogDescription>
              A window overlaid on either the primary window or another dialog window, rendering the
              content underneath inert.
            </DialogDescription>
          </DialogHeader>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima error dicta
            accusantium alias odio fugit quo natus quae animi voluptatibus ipsa iste architecto enim
            sapiente, eveniet deserunt impedit rem.
          </div>
          <DialogFooter>Dialog footer</DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Sheet Component */}
      {SHEET_SIDES.map(side => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant='outline'>Sheet {side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Sheet</SheetTitle>
              <SheetDescription>
                Extends the Dialog component to display content that complements the main content of
                the screen.
              </SheetDescription>
            </SheetHeader>
            <div className='py-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima error dicta
              accusantium alias odio fugit quo natus quae animi voluptatibus ipsa iste architecto
              enim sapiente, eveniet deserunt impedit rem.
            </div>
            <SheetFooter>Sheet footer</SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
