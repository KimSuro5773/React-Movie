function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold">KimSuro</h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              우아한 테크코스 8기 오픈미션 공부 및 과제용
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/KimSuro5773"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="GitHub"
            >
              <img src="./svg/github.svg" alt="GitHub" className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              href="https://velog.io/@kimsuro/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="Velog"
            >
              <img src="./svg/velog.svg" alt="Velog" className="w-8 h-8 md:w-10 md:h-10" />
            </a>
          </div>

          <div className="text-xs md:text-sm text-muted-foreground">
            © 2025 KimSuro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
