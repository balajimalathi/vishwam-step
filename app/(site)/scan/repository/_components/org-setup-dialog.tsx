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
import { Loader, ScanQrCode, UserPlus } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function OrgSetupDialog() {
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
  const [source, setSource] = useState(false);

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
        <Button variant="secondary" onClick={() => setIsOpen(true)}>
          <UserPlus className="mr-2 h-4 w-4" /> Add Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Account</DialogTitle>
          <DialogDescription>
            {`Start scanning repository to harvest API's`}
          </DialogDescription>
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
              <Label>Org Name</Label>
              <Input
                id="title"
                name="title"
                className="col-span-4"
                placeholder="Enter organization name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label>Repo Type</Label>
              <Select>
                <SelectTrigger className="col-span-4">
                  <SelectValue placeholder="Select repo type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="main">Github</SelectItem>
                    <SelectItem value="dev">GitLab</SelectItem>
                    <SelectItem value="uat">Azure</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label>Source</Label>
              <div className="col-span-4 grid grid-cols-2 gap-2">
                <Button
                  variant={!source ? 'gradientOutline' : 'default'}
                  onClick={() => {
                    setSource(true);
                  }}
                >
                  Account
                </Button>
                <Button
                  variant={source ? 'gradientOutline' : 'default'}
                  onClick={() => {
                    setSource(false);
                  }}
                >
                  Access Token
                </Button>
              </div>
            </div>
            {source ? (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label>Username</Label>
                  <div className="col-span-4 flex flex-row gap-4">
                    <Input
                      id="title"
                      name="title"
                      placeholder="Enter username"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label>Password</Label>
                  <div className="col-span-4 flex flex-row gap-4">
                    <Input
                      id="title"
                      name="title"
                      type="password"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-4 items-center gap-2">
                <Label>Access Token</Label>
                <div className="col-span-4 flex flex-row gap-4">
                  <Input
                    id="title"
                    name="title"
                    type="password"
                    placeholder="Enter access token"
                  />
                </div>
              </div>
            )}
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
