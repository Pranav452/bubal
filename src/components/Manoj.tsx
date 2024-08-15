import React from 'react';
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

export function Manoj() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex items-center justify-between bg-background px-4 py-3 border-b shadow-sm sm:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <BotIcon className="w-6 h-6" />
          <span>Pawans ChatBot</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="flex flex-1">
        <div className="hidden md:flex flex-col bg-background border-r p-4 gap-2">
          <Button variant="ghost" className="justify-start w-full gap-2 px-2 text-left">
            <div className="flex items-center justify-center rounded-full w-7 h-7">
              <BotIcon className="w-4 h-4" />
            </div>
            <div className="overflow-hidden text-sm grow text-ellipsis whitespace-nowrap">ChatBot</div>
            <PenIcon className="w-4 h-4" />
          </Button>
          <div className="flex-1 overflow-auto">
            <div className="grid gap-1 text-foreground">
              <Link
                href="#"
                className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
                prefetch={false}
              >
                How to make a chatbot
              </Link>
              <Link
                href="#"
                className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
                prefetch={false}
              >
                Chatbot best practices
              </Link>
              <Link
                href="#"
                className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
                prefetch={false}
              >
                Chatbot use cases
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex-1 overflow-auto p-4">
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <Avatar className="w-6 h-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                  <AvatarFallback>YO</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 bg-muted p-3 rounded-md">
                  <div className="font-bold">You</div>
                  <div className="prose text-muted-foreground">
                    <p>Can you explain how airplane turbulence works in a simple way?</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-6 h-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                  <AvatarFallback>OA</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 bg-primary p-3 rounded-md text-primary-foreground">
                  <div className="font-bold">ChatBot</div>
                  <div className="prose">
                    <p>
                      Airplane turbulence happens when the plane hits pockets of air that are moving differently. It&apos;s
                      like driving on a bumpy road - the plane can feel like it&apos;s bouncing or shaking a bit. But it&apos;s
                      totally normal and not dangerous at all.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-6 h-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                  <AvatarFallback>YO</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 bg-muted p-3 rounded-md">
                  <div className="font-bold">You</div>
                  <div className="prose text-muted-foreground">
                    <p>
                      That makes sense, thanks for the explanation! Do you have any other tips for first-time flyers?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-6 h-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                  <AvatarFallback>OA</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 bg-primary p-3 rounded-md text-primary-foreground">
                  <div className="font-bold">ChatBot</div>
                  <div className="prose">
                    <p>Here are a few tips for first-time flyers:</p>
                    <ul>
                      <li>Arrive at the airport early to allow plenty of time</li>
                      <li>Bring snacks and entertainment to pass the time</li>
                      <li>Stay hydrated and avoid alcohol before the flight</li>
                      <li>Try to get an aisle or window seat for more comfort</li>
                      <li>Don&apos;t be afraid to ask the flight attendants for help</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl w-full mx-auto py-2 flex flex-col gap-1.5 px-4 bg-background">
            <div className="relative">
              <Textarea
                placeholder="Message ChatBot..."
                name="message"
                id="message"
                rows={1}
                className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
              />
              <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3">
                <ArrowUpIcon className="w-4 h-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
            <p className="text-xs font-medium text-center text-neutral-700">
              ChatBot can make mistakes. Consider checking important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function PenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}
