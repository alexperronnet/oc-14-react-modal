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
import { Button } from '@/ui/button'

export function Demo() {
  return (
    <div className='flex min-h-screen items-center justify-center space-x-2 font-sans'>
      {/* Alert Dialog Component */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant='outline'>Alert Dialog Component</Button>
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
          <Button variant='outline'>Dialog Component</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Dialog</DialogTitle>
            <DialogDescription>
              A window overlaid on either the primary window or another dialog window, rendering the
              content underneath inert.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima error dicta
            accusantium alias odio fugit quo natus quae animi voluptatibus ipsa iste architecto enim
            sapiente, eveniet deserunt impedit rem.
          </div>
          <DialogFooter>Dialog footer</DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
