'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { useTaskStore } from '@/lib/store';
import { Loader, UploadCloud } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function RepoScanFormDialog() {
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { title, description } = Object.fromEntries(formData);

    if (typeof title !== 'string' || typeof description !== 'string') return;
    addTask(title, description);
  };

  const [loading, isLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
        isLoading(false);
      }, 5000); // Close after 5 seconds
    }
    return () => clearTimeout(timer); // Cleanup on component unmount or re-render
  }, [loading]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="gradient" onClick={() => setIsOpen(true)}>
          <UploadCloud className="mr-2 h-4 w-4" /> Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Known API</DialogTitle>
          <DialogDescription>Upload Known APIs</DialogDescription>
        </DialogHeader>
        {loading ? (
          <div className="grid h-1/5 place-items-center">
            <Loader className="mr-3 h-5 w-5 animate-spin" />
          </div>
        ) : (
          <form
            id="todo-form"
            className="grid gap-4 py-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-4 items-center gap-2">
              <Label>Project Name</Label>
              <Select>
                <SelectTrigger className="col-span-4">
                  <SelectValue placeholder="Select a project name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">payment_service</SelectItem>
                    <SelectItem value="banana">bank_service</SelectItem>
                    <SelectItem value="blueberry">credit_service</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label>Type</Label>
              <Select>
                <SelectTrigger className="col-span-4">
                  <SelectValue placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">OAS (JSON, YAML)</SelectItem>
                    <SelectItem value="banana">URLs (SwaggerHub)</SelectItem>
                    <SelectItem value="blueberry">Excel</SelectItem>
                    <SelectItem value="grapes">CSV</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="upload">Upload</Label>
              <div className="col-span-4 flex flex-row gap-4">
                <Input id="upload" type="file" />
                <Button type="button" variant={'outline'}>
                  Upload
                </Button>
              </div>
            </div>
          </form>
        )}
        <DialogFooter>
          <div className="flex flex-row gap-4">
            <Button type="button" variant={'outline'}>
              Cancel
            </Button>
            <Button
              disabled={loading}
              type="button"
              variant={'gradient'}
              onClick={() => {
                isLoading(true);
              }}
            >
              Next
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
